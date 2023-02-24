import hadithsData from './hadiths.json';
import hadithsArData from './hadithsAr.json';

const section = {
    book: hadithsData.metadata.name,
    chapter: hadithsData.metadata.section[81],
};

let hadithArr = hadithsData.hadiths.map(({ arabicnumber, grades, ...rest }) => ({ ...rest }));

hadithArr.forEach(function (obj, index) {
    let regex = /^([^:]+:\s*)/;
    let match = obj.text.match(regex);
    if (match) {
        obj.narrator = match[1].trim();
        obj.text = obj.text.replace(match[0], '');
    }
    obj.text += obj.text.endsWith('.') ? '' : '.';
    obj.textAr = hadithsArData.hadiths[index].text;
});
console.log(hadithArr);
export { section, hadithArr };




