declare module "aos" {
    interface AosOptions {
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
        startEvent?: string;
        disable?: boolean | 'phone' | 'tablet' | 'mobile';
    }

    interface Aos {
        init(options?: AosOptions): void;
        refresh(): void;
        refreshHard(): void;
    }

    const AOS: Aos;
    export default AOS;
}

declare namespace JSX {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        "data-aos"?: string;
        "data-aos-offset"?: string | number;
        "data-aos-delay"?: string | number;
        "data-aos-duration"?: string | number;
        "data-aos-easing"?: string;
        "data-aos-anchor"?: string;
        "data-aos-anchor-placement"?: string;
        "data-aos-once"?: boolean;
        "data-aos-mirror"?: boolean;
    }
}

