// WALL 1
const original_1 = "./assets/paintings/mad_cat_original/original_1/original_1_";
const original_1_painting = "./assets/paintings/mad_cat_original/original_1.png";

const original_2 = "./assets/paintings/mad_cat_original/original_2/original_2_";
const original_2_painting = "./assets/paintings/mad_cat_original/original_2.png";

const original_3 = "./assets/paintings/mad_cat_original/original_3/original_3_";
const original_3_painting = "./assets/paintings/mad_cat_original/original_3.png";

const original_4 = "./assets/paintings/mad_cat_original/original_4/original_4_";
const original_4_painting = "./assets/paintings/mad_cat_original/original_4.png";

// WALL 4

const grayscale_1 = "./assets/paintings/mad_cat_grayscale/grayscale_1/grayscale_1_";
const grayscale_1_painting = "./assets/paintings/mad_cat_grayscale/grayscale_1.png";

const grayscale_2 = "./assets/paintings/mad_cat_grayscale/grayscale_2/grayscale_2_";
const grayscale_2_painting = "./assets/paintings/mad_cat_grayscale/grayscale_2.png";

const grayscale_3 = "./assets/paintings/mad_cat_grayscale/grayscale_3/grayscale_3_";
const grayscale_3_painting = "./assets/paintings/mad_cat_grayscale/grayscale_3.png";

const grayscale_4 = "./assets/paintings/mad_cat_grayscale/grayscale_4/grayscale_4_";
const grayscale_4_painting = "./assets/paintings/mad_cat_grayscale/grayscale_4.png";

// WALL 2

// wall_row_column
const paintings = {
    "0_3_0": {
        "picture": "./assets/numbers/numbers-01.jpg",
        "big_picture": null,
        "row": 3
    },

    "0_2_3": {
        "picture": original_1 + "1.png",
        "big_picture": original_1_painting,
        "row": 2
    },
    "0_2_4": {
        "picture": original_1 + "2.png",
        "big_picture": original_1_painting,
        "row": 2
    },
    "0_1_3": {
        "picture": original_1 + "3.png",
        "big_picture": original_1_painting,
        "row": 1
    },
    "0_1_4": {
        "picture": original_1 + "4.png",
        "big_picture": original_1_painting,
        "row": 1
    },

    "0_2_10": {
        "picture": original_2 + "1.png",
        "big_picture": original_2_painting,
        "row": 2
    },
    "0_2_11": {
        "picture": original_2 + "2.png",
        "big_picture": original_2_painting,
        "row": 2
    },
    "0_1_10": {
        "picture": original_2 + "3.png",
        "big_picture": original_2_painting,
        "row": 1
    },
    "0_1_11": {
        "picture": original_2 + "4.png",
        "big_picture": original_2_painting,
        "row": 1
    },

    "0_2_17": {
        "picture": original_3 + "1.png",
        "big_picture": original_3_painting,
        "row": 2
    },
    "0_2_18": {
        "picture": original_3 + "2.png",
        "big_picture": original_3_painting,
        "row": 2
    },
    "0_1_17": {
        "picture": original_3 + "3.png",
        "big_picture": original_3_painting,
        "row": 1
    },
    "0_1_18": {
        "picture": original_3 + "4.png",
        "big_picture": original_3_painting,
        "row": 1
    },

    "0_2_24": {
        "picture": original_4 + "1.png",
        "big_picture": original_4_painting,
        "row": 2
    },
    "0_2_25": {
        "picture": original_4 + "2.png",
        "big_picture": original_4_painting,
        "row": 2
    },
    "0_1_24": {
        "picture": original_4 + "3.png",
        "big_picture": original_4_painting,
        "row": 1
    },
    "0_1_25": {
        "picture": original_4 + "4.png",
        "big_picture": original_4_painting,
        "row": 1
    },


    "2_3_27": {
        "picture": "./assets/numbers/numbers-04.jpg",
        "big_picture": null,
        "row": 3
    },

    "2_2_25": {
        "picture": grayscale_1 + "1.png",
        "big_picture": grayscale_1_painting,
        "row": 2
    },
    "2_2_24": {
        "picture": grayscale_1 + "2.png",
        "big_picture": grayscale_1_painting,
        "row": 2
    },
    "2_1_25": {
        "picture": grayscale_1 + "3.png",
        "big_picture": grayscale_1_painting,
        "row": 1
    },
    "2_1_24": {
        "picture": grayscale_1 + "4.png",
        "big_picture": grayscale_1_painting,
        "row": 1
    },

    "2_2_18": {
        "picture": grayscale_2 + "1.png",
        "big_picture": grayscale_2_painting,
        "row": 2
    },
    "2_2_17": {
        "picture": grayscale_2 + "2.png",
        "big_picture": grayscale_2_painting,
        "row": 2
    },
    "2_1_18": {
        "picture": grayscale_2 + "3.png",
        "big_picture": grayscale_2_painting,
        "row": 1
    },
    "2_1_17": {
        "picture": grayscale_2 + "4.png",
        "big_picture": grayscale_2_painting,
        "row": 1
    },

    "2_2_11": {
        "picture": grayscale_3 + "1.png",
        "big_picture": grayscale_3_painting,
        "row": 2
    },
    "2_2_10": {
        "picture": grayscale_3 + "2.png",
        "big_picture": grayscale_3_painting,
        "row": 2
    },
    "2_1_11": {
        "picture": grayscale_3 + "3.png",
        "big_picture": grayscale_3_painting,
        "row": 1
    },
    "2_1_10": {
        "picture": grayscale_3 + "4.png",
        "big_picture": grayscale_3_painting,
        "row": 1
    },

    "2_2_4": {
        "picture": grayscale_4 + "1.png",
        "big_picture": grayscale_4_painting,
        "row": 2
    },
    "2_2_3": {
        "picture": grayscale_4 + "2.png",
        "big_picture": grayscale_4_painting,
        "row": 2
    },
    "2_1_4": {
        "picture": grayscale_4 + "3.png",
        "big_picture": grayscale_4_painting,
        "row": 1
    },
    "2_1_3": {
        "picture": grayscale_4 + "4.png",
        "big_picture": grayscale_4_painting,
        "row": 1
    },


    "1_3_27": {
        "picture": "./assets/numbers/numbers-03.jpg",
        "big_picture": null,
        "row": 3
    },
    

    
    "3_3_0": {
        "picture": "./assets/numbers/numbers-02.jpg",
        "big_picture": null,
        "row": 1
    },


    "3_1_24": {
        "picture": "./assets/artist/mad_leal.jpg",
        "big_picture": null,
        "row": 1
    },
    "3_1_25": {
        "picture": "./assets/artist/mad.png",
        "big_picture": null,
        "row": 1
    },
    "3_1_26": {
        "picture": "./assets/artist/cat.png",
        "big_picture": null,
        "row": 1
    },
};

export { paintings };