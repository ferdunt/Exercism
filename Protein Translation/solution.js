const codons = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "stop",
    UAG: "stop",
    UGA: "stop",
};

const translate = rna => {
    let sequences = [];
    let count = 1;
    let singleRNA = "";

    // 💬 Check if there is an RNA otherwise return []
    if (rna === undefined) return [];

    // 💬 Loop over the 'rna' string
    for (let i = 0; i < rna.length; i++) {
        // 💬 Concatenate each string until we get 3 nucleotide
        singleRNA += rna[i];

        if (count === 3) {
            // 💬 If the 'singleRNA' correspond to the 'stop' codons we break
            if (codons[singleRNA] === "stop") {
                singleRNA = "";
                break;
            }

            // 💬 Push the new codon into 'sequences'
            sequences.push(codons[singleRNA]);

            // 💬 Restart 'count' and 'singleRNA'
            count = 0;
            singleRNA = "";
        }
        count++;
    }

    // 💬 Verify if there was a 'singleRNA' incomplete or an undefined codon
    if (singleRNA.length >= 1 || sequences.includes(undefined)) {
        throw new Error("Invalid codon");
    }

    return sequences;
};
