function convertHTML(str) {
    const HTMLEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/([&<>"'])/g, match => HTMLEntities[match])
}

convertHTML("Dolce & Gabbana");