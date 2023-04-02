interface IconProps{
    width?: number,
    height?: number,
    size?: number,
    className?: string
}
export function Folder(props: IconProps){
    const {className, height, size=24, width} = props
    return(
    <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_11_11)">
        <path d="M10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" fill="currentColor"/>
        </g>
        <defs>
        <clipPath id="clip0_11_11">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    )
}

export function FolderOpen(props: IconProps){
    const {className, height, size=24, width} = props
    return(
    <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_15_16)">
        <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z" fill="currentColor"/>
        </g>
        <defs>
        <clipPath id="clip0_15_16">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    )
}

export function File({fileExtension, height, width, size=28}:{fileExtension?: string, width?: number, height?: number, size?: number}){    
    return(
        <div className="relative flex items-center justify-center" style={{
            width: (width?width:size)+"px",
            height: (height?height:size)+"px"
        }}>
         <svg className="w-full h-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2.5C4.9 2.5 4.01 3.4 4.01 4.5L4 20.5C4 21.6 4.89 22.5 5.99 22.5H18C19.1 22.5 20 21.6 20 20.5V8.5L14 2.5H6ZM13 9.5V4L18.5 9.5H13Z" fill="white" fillOpacity="0.8"/>
          </svg>
          {fileExtension&&<span className="text-black-transparent-80 font-bold uppercase leading-[8px] block absolute bottom-1" 
          style={{
                fontSize: (7 - ((fileExtension.length-1) * 0.5))+"px",
          }}>{fileExtension}</span>}
        </div>
    )
}

export function Git(props: IconProps){
    const {
        width,
        height,
        size=24
    } = props
    return(
        <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_14_66)">
<path d="M18.2892 4.39592C17.8151 3.90989 17.2396 3.6668 16.5624 3.6668C15.8856 3.6668 15.31 3.90975 14.836 4.39592C14.3622 4.88195 14.1253 5.47215 14.1253 6.16675C14.1253 6.61812 14.235 7.03698 14.4551 7.42322C14.6751 7.80951 14.971 8.11125 15.3437 8.32816C15.3437 8.77953 15.3079 9.17681 15.2361 9.51964C15.164 9.86247 15.0456 10.164 14.8806 10.4246C14.7152 10.685 14.5442 10.9062 14.3663 11.0886C14.1884 11.271 13.9388 11.4423 13.6172 11.603C13.2957 11.7636 12.9971 11.898 12.7221 12.0066C12.4472 12.115 12.0768 12.243 11.6113 12.3906C10.7648 12.6598 10.1133 12.907 9.65621 13.1329V6.66131C10.0286 6.44445 10.3248 6.14276 10.5449 5.75647C10.7648 5.37018 10.8748 4.95128 10.8748 4.4999C10.8748 3.80554 10.638 3.2152 10.164 2.72917C9.69013 2.24318 9.1147 2 8.43753 2C7.76032 2 7.18488 2.24299 6.71088 2.72917C6.23705 3.2152 6 3.80554 6 4.4999C6 4.95128 6.11001 5.37018 6.32998 5.75647C6.55 6.14276 6.84619 6.44445 7.21863 6.66131V17.3387C6.84619 17.5555 6.55 17.8575 6.32998 18.2436C6.11001 18.6301 6 19.049 6 19.5002C6 20.1946 6.23687 20.7848 6.71088 21.2708C7.18488 21.7568 7.76045 22 8.43753 22C9.11457 22 9.69013 21.7568 10.164 21.2708C10.6378 20.7848 10.8748 20.1945 10.8748 19.5002C10.8748 19.049 10.7648 18.6301 10.5449 18.2436C10.3248 17.8575 10.0286 17.5555 9.65621 17.3387V17.0001C9.65621 16.4013 9.8318 15.9674 10.183 15.6983C10.5342 15.4289 11.2515 15.1209 12.3349 14.7738C13.4776 14.4004 14.3368 14.0486 14.9123 13.7187C16.808 12.6165 17.7644 10.8195 17.7813 8.32811C18.1539 8.11125 18.4499 7.80947 18.6699 7.42318C18.8898 7.03688 19 6.61808 19 6.1667C19.0001 5.47229 18.7631 4.88209 18.2892 4.39592ZM9.30097 20.3859C9.06388 20.6291 8.77614 20.7505 8.43771 20.7505C8.09906 20.7505 7.81132 20.6291 7.57431 20.3859C7.33744 20.1431 7.21885 19.8478 7.21885 19.5006C7.21885 19.1533 7.33731 18.8583 7.57431 18.6151C7.81132 18.3721 8.09906 18.2505 8.43771 18.2505C8.77614 18.2505 9.06392 18.3722 9.30097 18.6151C9.53797 18.8583 9.65638 19.1533 9.65638 19.5006C9.65634 19.8478 9.53797 20.143 9.30097 20.3859ZM9.30097 5.3855C9.06388 5.62859 8.77614 5.75008 8.43771 5.75008C8.09906 5.75008 7.81132 5.62859 7.57431 5.3855C7.33744 5.14242 7.21885 4.84743 7.21885 4.50009C7.21885 4.15283 7.33731 3.85762 7.57431 3.61476C7.81132 3.37172 8.09906 3.25018 8.43771 3.25018C8.77614 3.25018 9.06392 3.37177 9.30097 3.61476C9.53797 3.85762 9.65638 4.15283 9.65638 4.50009C9.65634 4.84743 9.53797 5.14255 9.30097 5.3855ZM17.4258 7.0523C17.1889 7.29525 16.9013 7.41684 16.5627 7.41684C16.224 7.41684 15.9362 7.29525 15.6995 7.0523C15.4626 6.80935 15.344 6.51418 15.344 6.16689C15.344 5.81963 15.4626 5.5246 15.6995 5.28147C15.9364 5.03834 16.224 4.91693 16.5627 4.91693C16.9013 4.91693 17.1889 5.03839 17.4258 5.28147C17.6627 5.52437 17.7813 5.81959 17.7813 6.16689C17.7813 6.51414 17.6629 6.80935 17.4258 7.0523Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_14_66">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    )
}

export function Search(props: IconProps){
    const {className, height, size=24, width} = props
    return(
        <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_14_85)">
<path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_14_85">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}

export function Plugins(props: IconProps){
    const {className, height, size=24, width} = props
    return(
        <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_14_81)">
<path d="M13 13V21H21V13H13ZM3 21H11V13H3V21ZM3 3V11H11V3H3ZM16.66 1.69L11 7.34L16.66 13L22.32 7.34L16.66 1.69Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_14_81">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    )
}

export function Settings(props: IconProps){
    const {className, height, size=24, width} = props
    return(
        <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_16_37)">
<path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.47999C21.34 9.33999 21.39 9.06999 21.28 8.86999L19.36 5.54999C19.24 5.32999 18.99 5.25999 18.77 5.32999L16.38 6.28999C15.88 5.90999 15.35 5.58999 14.76 5.34999L14.4 2.80999C14.36 2.56999 14.16 2.39999 13.92 2.39999H10.08C9.84 2.39999 9.65 2.56999 9.61 2.80999L9.25 5.34999C8.66 5.58999 8.12 5.91999 7.63 6.28999L5.24 5.32999C5.02 5.24999 4.77 5.32999 4.65 5.54999L2.74 8.86999C2.62 9.07999 2.66 9.33999 2.86 9.47999L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.39999 12 8.39999C13.98 8.39999 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_16_37">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    )
}

export function CuretLeft(props: IconProps){
    const {className, height, size=24, width} = props
    return(
        <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_15_39)">
<path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_15_39">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}

export function CuretDown(props: IconProps){
    const {className, height, size=24, width} = props
    return(
        <svg width={(width?width:size)+"px"} height={(height?height:size)+"px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_15_40)">
<path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_15_40">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    )
}
