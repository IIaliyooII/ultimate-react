import supabase from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded.");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted.");
  }

  return data;
};

export const createCabin = async (newCabin) => {
  const { data, error } = await supabase.from("cabins").insert([newCabin]).select();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created.");
  }

  return data;
};
