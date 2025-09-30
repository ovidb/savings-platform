export const sortSavingsData = (data, searchTerm) => {
    console.log('sorting savings data...');

    return data
        .filter((x) => !searchTerm ? true : x.name.startsWith(searchTerm))
        .sort((a, b) => a.id - b.id);
}