import { useRequestArray } from "./useRequestArray";

export function usePartnersArray() {
    const arrayImagePartners = useRequestArray('http://localhost:2003/api/slider/image/partners').requestArray;

    return { arrayImagePartners }
}