import { establishContainer } from "../../utils";

let counter = 0;

export function touchIe() {
    counter += 1;

    console.log('touch ie')

    establishContainer().attr('data-ie-touch', counter);    
}