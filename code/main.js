//to uppercase the first letter of a string

function capitalizeString (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalizeString;
