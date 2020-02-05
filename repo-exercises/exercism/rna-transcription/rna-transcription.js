//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let nucleotide = ["G", "C", "T", "A"];
let complement = ["C", "G", "A", "U"];

export const toRna = nuc => complement.charAT(nucleotide.indexOf(nuc));
