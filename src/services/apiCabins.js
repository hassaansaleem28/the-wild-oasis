import supabase from "./supabase";
const supabaseUrl = "https://boewzeuybzbbrbopsegz.supabase.co";

export default async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins can' t be loaded.");
  }
  return data;
}
export async function createNeditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;
  // create/edit cabin
  let query = supabase.from("cabins");

  // a) create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // b) edit cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (hasImagePath) return data;
  if (error) throw new Error("Cabin can' t be created!");
  // upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete the cabin if there was error in uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      " Cabin image was not uploaded and the cabin was not created"
    );
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin can' t be deleted!");
  return data;
}
