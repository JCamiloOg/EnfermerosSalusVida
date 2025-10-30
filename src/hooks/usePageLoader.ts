import { useCallback, useState } from "react";

export function usePageLoader() {
    const [loading, setLoading] = useState(false);

    const startLoading = useCallback(() => {
        setLoading(true);
        document.documentElement.style.overflow = "hidden";
    }, []);

    const stopLoading = useCallback(() => {
        setLoading(false);
        document.documentElement.style.overflow = "auto";
    }, []);

    return { loading, startLoading, stopLoading };

}