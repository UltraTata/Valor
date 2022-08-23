export default function cloneArray(array){
    let newArray = [];
    array.map(
        (element) => {newArray.push(element)}
    );
    return newArray;
}