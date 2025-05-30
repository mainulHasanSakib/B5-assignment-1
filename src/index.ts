function formatString(input: string, toUpper?: boolean): string{
    console.log(toUpper);
    if(toUpper===true|| toUpper===undefined){
    return input.toUpperCase();
}else{
    return input.toLowerCase();
}


}

