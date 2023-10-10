import supabase, { supabaseUrl } from "./supabase";

const getCabins = async () => {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		console.log(error);
		throw new Error("Cabins could not be loaded");
	}

	return data;
};

const deleteCabin = async (id) => {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		console.log(error);
		throw new Error("Cabin could not be Deleted");
	}

	return data;
};

const createEditCabin = async (newCabin, id) => {
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

	const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
	const imagePath = hasImagePath
		? newCabin.image
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	// 1. Create/Edit Cabins
	let query = supabase.from("cabins");

	// A. Create
	if (!id) query = query.insert([{ ...newCabin, image: imagePath }]).select();

	// B. Edit
	if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

	const { data, error } = await query.select().single();

	if (error) {
		console.log(error);
		throw new Error("Cabin could not be Created");
	}

	// 2. Upload Images
	if (hasImagePath) return data;

	const { error: storageError } = await supabase.storage
		.from("cabin-images")
		.upload(imageName, newCabin.image);

	// 3.Delete the cabin IF there was error uploading image
	if (storageError) {
		await supabase.from("cabins").delete().eq("id", data.id);
		console.log(storageError);
		throw new Error("Cabin could not be Created");
	}

	return data;
};

export { getCabins, deleteCabin, createEditCabin };

// 11. Editing a Cabin 07:40 seconds
