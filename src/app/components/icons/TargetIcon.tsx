import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const TargetIcon: React.FC<Props> = props => {
    return (
        <svg height="1em" viewBox="-46 0 512 512.001" width="1em" {...props}>
            <path
                d="M209.863 9.992c-99.343 0-179.883 80.54-179.883 179.883 0 62.371 31.739 117.324 79.95 149.586a178.844 178.844 0 0039.972 20.055c18.758 6.636 38.934 10.242 59.961 10.242 21.028 0 41.203-3.606 59.961-10.242a178.873 178.873 0 0039.977-20.055c48.207-32.262 79.945-87.215 79.945-149.586 0-99.344-80.535-179.883-179.883-179.883zm0 299.805c-66.226 0-119.922-53.695-119.922-119.922S143.637 69.953 209.863 69.953c66.227 0 119.922 53.695 119.922 119.922S276.09 309.797 209.863 309.797zm0 0"
                fill="#ff5d5d"
            />
            <path
                d="M209.863 69.953c-66.226 0-119.922 53.695-119.922 119.922s53.696 119.922 119.922 119.922c66.227 0 119.922-53.695 119.922-119.922S276.09 69.953 209.863 69.953zm0 179.883c-33.117 0-59.96-26.84-59.96-59.961 0-33.117 26.843-59.96 59.96-59.96 33.121 0 59.961 26.843 59.961 59.96 0 33.121-26.84 59.96-59.96 59.96zm0 0"
                fill="#fff"
            />
            <path
                d="M269.824 189.875c0 33.117-26.844 59.96-59.96 59.96-33.114 0-59.962-26.843-59.962-59.96 0-33.113 26.848-59.96 59.961-59.96 33.117 0 59.961 26.847 59.961 59.96zm0 0"
                fill="#ff5d5d"
            />
            <g fill="#707c96">
                <path d="M409.734 483.855c0 4.989-2.039 9.524-5.336 12.82-3.289 3.29-7.824 5.329-12.824 5.329H28.152c-9.992 0-18.16-8.164-18.16-18.149 0-4.996 2.04-9.535 5.34-12.82 3.285-3.3 7.824-5.34 12.82-5.34h363.422c9.996 0 18.16 8.168 18.16 18.16zm0 0" />
                <path d="M149.902 359.516v106.18H109.93V339.46a178.844 178.844 0 0039.972 20.055zm0 0M309.8 339.46v126.235h-39.976v-106.18a178.873 178.873 0 0039.977-20.054zm0 0" />
            </g>
            <path d="M209.863 319.793c71.637 0 129.918-58.281 129.918-129.918 0-5.52-4.476-9.992-9.996-9.992-5.515 0-9.992 4.472-9.992 9.992 0 60.617-49.313 109.93-109.93 109.93-60.613 0-109.93-49.313-109.93-109.93 0-60.613 49.317-109.926 109.93-109.926 31.23 0 61.094 13.356 81.938 36.64 3.68 4.118 10 4.462 14.113.782 4.11-3.68 4.461-9.996.781-14.11-24.632-27.519-59.925-43.3-96.832-43.3-71.636 0-129.914 58.281-129.914 129.914 0 71.637 58.278 129.918 129.914 129.918zm0 0" />
            <path d="M139.91 189.875c0 38.574 31.383 69.957 69.953 69.957 38.575 0 69.957-31.383 69.957-69.957 0-38.57-31.382-69.953-69.957-69.953-38.57 0-69.953 31.383-69.953 69.953zm119.922 0c0 27.555-22.414 49.969-49.969 49.969-27.55 0-49.965-22.414-49.965-49.969 0-27.55 22.415-49.965 49.965-49.965 27.555 0 49.969 22.414 49.969 49.965zm0 0" />
            <path d="M391.578 455.703h-71.785V344.695c50.16-35.64 79.95-93.11 79.95-154.82C399.742 85.18 314.562 0 209.862 0S19.988 85.18 19.988 189.875c0 61.71 29.79 119.184 79.946 154.82v111.008H28.148C12.628 455.703 0 468.332 0 483.852 0 499.375 12.629 512 28.148 512h363.43c15.524 0 28.149-12.625 28.149-28.148 0-15.52-12.625-28.149-28.149-28.149zm-111.758 0v-89.277a188.888 188.888 0 0019.985-9.297v98.574zm-119.922 0v-82.61c16.207 4.419 32.957 6.66 49.965 6.66a189.89 189.89 0 0049.969-6.66v82.61zM39.973 189.875c0-93.676 76.215-169.887 169.89-169.887 93.68 0 169.89 76.211 169.89 169.887 0 56.824-28.23 109.637-75.519 141.281a.054.054 0 01-.015.012.008.008 0 00-.008.008 168.858 168.858 0 01-37.719 18.918c-18.14 6.418-37.191 9.672-56.629 9.672-19.433 0-38.488-3.254-56.633-9.672a169.052 169.052 0 01-37.71-18.918c-.004-.004-.008-.004-.008-.004a.082.082 0 00-.024-.016C68.203 299.512 39.973 246.7 39.973 189.875zm79.949 167.254a188.949 188.949 0 0019.988 9.297v89.277h-19.988zm271.656 134.883H28.148c-4.5 0-8.16-3.66-8.16-8.16s3.66-8.16 8.16-8.16h363.43c4.5 0 8.164 3.66 8.164 8.16s-3.664 8.16-8.164 8.16zm0 0" />
            <path d="M313.555 152.41c.25.602.562 1.18.922 1.719.359.55.777 1.059 1.238 1.52.46.468.98.878 1.52 1.25.55.359 1.128.667 1.73.917a9.922 9.922 0 007.64 0c.602-.25 1.184-.558 1.73-.918a9.674 9.674 0 001.509-1.25c.472-.46.879-.968 1.25-1.52.36-.538.672-1.116.918-1.718a9.814 9.814 0 00.762-3.828c0-.648-.063-1.309-.192-1.95a10.2 10.2 0 00-1.488-3.598 9.519 9.519 0 00-1.25-1.514 9.413 9.413 0 00-1.508-1.243c-.55-.359-1.129-.668-1.73-.918a9.922 9.922 0 00-7.641 0c-.602.25-1.18.559-1.73.918-.54.36-1.06.782-1.52 1.243-.461.457-.88.968-1.238 1.515-.36.543-.672 1.133-.922 1.73-.246.602-.438 1.231-.567 1.868a10.11 10.11 0 000 3.91c.13.629.32 1.258.567 1.867zm0 0" />
        </svg>
    );
};

export { TargetIcon };
