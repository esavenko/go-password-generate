export default defineEventHandler(async () => {
  return await $fetch('http://localhost:4200/generate').catch((e) => {
    console.error(e);

    return null;
  });
});
