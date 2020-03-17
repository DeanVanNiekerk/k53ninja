import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const SpeedometerIcon: React.FC<Props> = props => {
    return (
        <svg viewBox="0 0 512.001 512.001" width="1em" height="1em" {...props}>
            <g fillRule="evenodd" clipRule="evenodd">
                <path
                    d="M276 299.331V159.33c0-11-8.999-20-20-20s-20 9-20 20v140.001c0 11 8.999 20 20 20s20-9 20-20z"
                    fill="#fff0d9"
                />
                <path
                    d="M147.105 408.448c-60.141-60.141-60.141-157.649 0-217.79l-36.769-36.769C73.057 191.168 50 242.668 50 299.553c0 42.706 13.27 84.224 37.776 118.895h49.329l10-10z"
                    fill="#8fd57c"
                />
                <path
                    d="M364.896 190.658c60.141 60.141 60.141 157.649 0 217.79l10 10h49.328a205.995 205.995 0 0037.777-118.895c0-56.886-23.057-108.386-60.336-145.665l-36.769 36.77z"
                    fill="#fd4848"
                />
                <path
                    d="M401.665 153.888c37.279 37.279 60.336 88.779 60.336 145.665 0 42.813-13.333 84.31-37.777 118.895h47.137a246.003 246.003 0 0030.64-118.895C502.001 163.69 391.863 53.552 256 53.552S10 163.69 10 299.553c0 41.707 10.602 82.6 30.641 118.895h47.135A205.995 205.995 0 0150 299.553c0-56.885 23.057-108.386 60.336-145.665 37.279-37.279 88.779-60.336 145.665-60.336 56.885 0 108.385 23.058 145.664 60.336zM374.896 418.449H30.001c-11 0-20 9-20 20s9 20 20 20H482c11 0 20-9 20-20s-9-20-20-20H374.896z"
                    fill="#64759d"
                />
                <path
                    d="M147.105 190.658C173.1 164.663 206.078 149.913 240 146.39h.781c3.676-4.313 9.142-7.06 15.219-7.06s11.543 2.746 15.219 7.06H272c33.922 3.52 66.9 18.272 92.895 44.268l36.77-36.77C364.386 116.609 312.886 93.552 256 93.552c-56.886 0-108.386 23.058-145.665 60.337l36.77 36.769z"
                    fill="#ffba4a"
                />
                <path
                    d="M240 146.39c-33.923 3.523-66.9 18.272-92.895 44.268-60.141 60.141-60.141 157.649 0 217.79l-10 10h237.791l-10-10c60.141-60.141 60.141-157.649 0-217.79-25.995-25.995-58.973-40.747-92.895-44.268h-.781c2.978 3.494 4.781 8.017 4.781 12.94v140.001c0 11-8.999 20-20 20s-20-9-20-20V159.33c0-4.923 1.803-9.446 4.781-12.94H240z"
                    fill="#6a87c1"
                />
            </g>
            <path d="M487.444 408.953c16.105-34.109 24.557-71.61 24.557-109.4 0-68.381-26.629-132.668-74.98-181.021-48.353-48.352-112.64-74.98-181.02-74.98-53.941 0-105.537 16.585-149.208 47.962-4.485 3.223-5.509 9.471-2.286 13.956 3.223 4.484 9.472 5.509 13.956 2.286 40.25-28.918 87.811-44.204 137.539-44.204 130.131 0 236 105.87 236 236.001 0 37.834-9.197 75.353-26.634 108.896h-22.841a215.806 215.806 0 007.273-13.519c2.438-4.955.398-10.949-4.558-13.388-4.956-2.441-10.948-.398-13.388 4.558a196.72 196.72 0 01-12.9 22.349h-39.915l-.22-.22c26.624-30.008 41.183-68.22 41.183-108.676s-14.559-78.669-41.182-108.676l22.598-22.598c31.422 34.774 50.584 80.827 50.584 131.274 0 4.297-.145 8.654-.429 12.95-.364 5.511 3.808 10.273 9.318 10.639 5.51.367 10.274-3.808 10.639-9.318.313-4.733.472-9.535.472-14.271 0-57.696-22.468-111.938-63.265-152.736-40.798-40.797-95.04-63.265-152.736-63.265s-111.938 22.468-152.736 63.265C62.468 187.615 40 241.857 40 299.553c0 38.609 10.139 75.893 29.456 108.896H46.635C29.197 374.906 20 337.388 20 299.553c0-49.711 15.277-97.259 44.18-137.504 3.222-4.485 2.197-10.733-2.289-13.955-4.486-3.223-10.735-2.198-13.956 2.289C16.576 194.049 0 245.631 0 299.553c0 37.789 8.453 75.29 24.558 109.399C10.607 411.521.001 423.765.001 438.448c0 16.542 13.458 30 30 30h452c16.542 0 30-13.458 30-30-.001-14.682-10.606-26.926-24.557-29.495zm-95.292-156.234l-11.553 3.096c-5.335 1.43-8.501 6.913-7.071 12.247 1.197 4.469 5.237 7.415 9.653 7.415a9.98 9.98 0 002.594-.344l11.53-3.089a145.18 145.18 0 010 55.02l-11.53-3.089c-5.332-1.43-10.817 1.737-12.247 7.071s1.736 10.817 7.071 12.247l11.553 3.096a142.903 142.903 0 01-27.506 47.668l-8.467-8.467c-3.905-3.903-10.235-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l8.718 8.718H161.247l8.718-8.718c3.905-3.905 3.905-10.237 0-14.143-3.905-3.904-10.237-3.904-14.142 0l-8.471 8.472c-12.319-14.12-21.62-30.268-27.582-47.651l11.634-3.117c5.334-1.43 8.5-6.913 7.071-12.247-1.43-5.336-6.912-8.503-12.248-7.071l-11.606 3.11a145.497 145.497 0 01-2.62-27.53c0-9.345.891-18.553 2.62-27.531l11.606 3.11a10.03 10.03 0 002.595.344c4.415 0 8.456-2.947 9.653-7.415 1.43-5.334-1.736-10.817-7.071-12.247L119.77 252.7c5.963-17.384 15.263-33.531 27.582-47.651l8.472 8.472a9.968 9.968 0 007.071 2.929 9.97 9.97 0 007.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-8.465-8.465a144.513 144.513 0 0164.516-32.196c-.004.206-.016.41-.016.616v140c0 16.542 13.458 30 30 30s30-13.458 30-30v-140c0-.207-.011-.411-.016-.618a144.503 144.503 0 0164.517 32.197l-8.465 8.465c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929l8.467-8.467a142.865 142.865 0 0127.506 47.666zM266 159.331v140c0 5.514-4.486 10-10 10s-10-4.486-10-10v-140c0-5.514 4.486-10 10-10s10 4.486 10 10zm121.275-5.194l-22.6 22.6c-24.845-21.963-56-36.006-88.953-39.984-5.278-4.616-12.176-7.422-19.721-7.422s-14.444 2.806-19.721 7.422c-32.956 3.98-64.11 18.024-88.953 39.984l-22.6-22.6c34.774-31.422 80.827-50.584 131.274-50.584 50.447-.001 96.5 19.162 131.274 50.584zM60 299.553c0-50.448 19.162-96.5 50.584-131.274l22.598 22.598C106.559 220.885 92 259.098 92 299.553s14.56 78.668 41.183 108.675l-.22.22H93.044C71.413 376.115 60 338.58 60 299.553zm422 148.896H30c-5.514 0-10-4.486-10-10s4.486-10 10-10h10.62l.03.002.032-.002h47.087l.017.001.026-.001H424.19l.026.001.017-.001h47.089l.032.002.03-.002H482c5.514 0 10 4.486 10 10s-4.486 10-10 10z" />
            <path d="M283.887 349.332h-55.773c-5.523 0-10 4.478-10 10s4.477 10 10 10h55.773c5.522 0 10-4.478 10-10s-4.477-10-10-10zM82.05 135.606a9.972 9.972 0 007.071-2.929l.005-.005c3.905-3.905 3.903-10.234-.002-14.14-3.905-3.904-10.238-3.904-14.144.002-3.905 3.905-3.905 10.237 0 14.143a9.964 9.964 0 007.07 2.929zM445.366 350.126c-1.518 5.311 1.558 10.845 6.868 12.362a9.982 9.982 0 002.752.388c4.352 0 8.355-2.863 9.61-7.256l.002-.007c1.518-5.311-1.559-10.842-6.869-12.358-5.305-1.518-10.846 1.561-12.363 6.871z" />
        </svg>
    );
};

export { SpeedometerIcon };
