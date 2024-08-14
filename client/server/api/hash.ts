export default defineEventHandler(async (event) => {
  return await $fetch('http://localhost:4200/hash').catch((e) =>
    console.error(e),
  );
});
