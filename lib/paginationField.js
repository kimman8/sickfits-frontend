import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache });
      const { skip, first } = args;
      // read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      console.log({ data });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // if there are items, just return them from the cache, and we dont need to go to the network
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        return false;
      } // fallback to network if the 2 above if statements dont work
      if (items.length) {
        return items;
      }
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when the apollo client comes back from the network with our product
      console.log(`mergin items from network ${incoming.length} `);
      console.log({ incoming, existing });
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      console.log(merged);
      // finally we return the merged items from the cache
      return merged;
    },
  };
}
