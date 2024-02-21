export const getData = async () => {
  let res;
  try {
    res = await (await fetch('http://localhost:3000/homePageData', { next: { revalidate: 0 } })).json();
  } catch (error) {
    console.error(error);
  }
  return res;
};
