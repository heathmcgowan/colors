var currentPlayer;
var players = [
    {
        name: "Heath",
        letter: "H",
        color: "green",
        score: 0,
    },
    {
        name: "Elizabeth",
        letter: "E",
        color: "red",
        score: 0,
    },
    {
        name: "Justin",
        letter: "J",
        color: "blue",
        score: 0,
    },
    {
        name: "Gina",
        letter: "G",
        color: "purple",
        score: 0,
    },
    {
        name: "Nick",
        letter: "N",
        color: "orange",
        score: 0,
    },
    {
        name: "Peter",
        letter: "P",
        color: "rgb(255,255,255,255)",
        score: 0, 
    }
];

var cards = [
    {
        name: "",
        colorOne: "#602a0e",
        coordinateOne: "A1",
        colorTwo: "#e91754",
        coordinateTwo: "A16",
        colorThree: "#fce118",
        coordinateThree: "I1",
        colorFour: "#c6dde3",
        coordinateFour: "I16",
    },
    {
        name: "",
        colorOne: "#70250e",
        coordinateOne: "A2",
        colorTwo: "#e51465",
        coordinateTwo: "A17",
        colorThree: "#faec2b",
        coordinateThree: "I2",
        colorFour: "#c1d9f1",
        coordinateFour: "I17",
    },
    {
        name: "",
        colorOne: "#782014",
        coordinateOne: "A3",
        colorTwo: "#e21075",
        coordinateTwo: "A18",
        colorThree: "#fcd933",
        coordinateThree: "I3",
        colorFour: "#c0d8f0",
        coordinateFour: "I18",
    },
    {
        name: "",
        colorOne: "#811e19",
        coordinateOne: "A4",
        colorTwo: "#d80f83",
        coordinateTwo: "A19",
        colorThree: "#fcd842",
        coordinateThree: "I4",
        colorFour: "#a7c8e9",
        coordinateFour: "I19",
    },
    {
        name: "",
        colorOne: "#941e1e",
        coordinateOne: "A5",
        colorTwo: "#d4138a",
        coordinateTwo: "A20",
        colorThree: "#fcde4c",
        coordinateThree: "I5",
        colorFour: "#9cb9e1",
        coordinateFour: "I20",
    },
    {
        name: "",
        colorOne: "#9e1b20",
        coordinateOne: "A6",
        colorTwo: "#c82791",
        coordinateTwo: "A21",
        colorThree: "#fed859",
        coordinateThree: "I6",
        colorFour: "#819fcb",
        coordinateFour: "I21",
    },
    {
        name: "",
        colorOne: "#af1e23",
        coordinateOne: "A7",
        colorTwo: "#bb2d91",
        coordinateTwo: "A22",
        colorThree: "#fddb60",
        coordinateThree: "I7",
        colorFour: "#7aa2d6",
        coordinateFour: "I22",
    },
    {
        name: "",
        colorOne: "#c62127",
        coordinateOne: "A8",
        colorTwo: "#b33394",
        coordinateTwo: "A23",
        colorThree: "#fbd66b",
        coordinateThree: "I8",
        colorFour: "#7093cb",
        coordinateFour: "I23",
    },
    {
        name: "",
        colorOne: "#e01e26",
        coordinateOne: "A9",
        colorTwo: "#a83594",
        coordinateTwo: "A24",
        colorThree: "#f5db7c",
        coordinateThree: "I9",
        colorFour: "#6686c3",
        coordinateFour: "I24",
    },
    {
        name: "",
        colorOne: "#ed1b24",
        coordinateOne: "A10",
        colorTwo: "#9f3894",
        coordinateTwo: "A25",
        colorThree: "#f1e092",
        coordinateThree: "I10",
        colorFour: "#5679bb",
        coordinateFour: "I25",
    },
    {
        name: "",
        colorOne: "#ec1d23",
        coordinateOne: "A11",
        colorTwo: "#933895",
        coordinateTwo: "A26",
        colorThree: "#ecdc9e",
        coordinateThree: "I11",
        colorFour: "#4c6cb5",
        coordinateFour: "I26",
    },
    {
        name: "",
        colorOne: "#ee1c25",
        coordinateOne: "A12",
        colorTwo: "#8c3d98",
        coordinateTwo: "A27",
        colorThree: "#e9e1b3",
        coordinateThree: "I12",
        colorFour: "#4262ad",
        coordinateFour: "I27",
    },
    {
        name: "",
        colorOne: "#ec1b2e",
        coordinateOne: "A13",
        colorTwo: "#833d96",
        coordinateTwo: "A28",
        colorThree: "#e1e0c2",
        coordinateThree: "I13",
        colorFour: "#3c5bab",
        coordinateFour: "I28",
    },
    {
        name: "",
        colorOne: "#ed1a3b",
        coordinateOne: "A14",
        colorTwo: "#7d3e99",
        coordinateTwo: "A29",
        colorThree: "#dce1cb",
        coordinateThree: "I14",
        colorFour: "#334fa2",
        coordinateFour: "I29",
    },
    {
        name: "",
        colorOne: "#ec1946",
        coordinateOne: "A15",
        colorTwo: "#73419a",
        coordinateTwo: "A30",
        colorThree: "#d2e0d3",
        coordinateThree: "I15",
        colorFour: "#27459d",
        coordinateFour: "I30",
    },
    {
        name: "",
        colorOne: "#884b1f",
        coordinateOne: "B1",
        colorTwo: "#ec166e",
        coordinateTwo: "B16",
        colorThree: "#f8eb21",
        coordinateThree: "J1",
        colorFour: "#bbe5e4",
        coordinateFour: "J16",
    },
    {
        name: "",
        colorOne: "#94441f",
        coordinateOne: "B2",
        colorTwo: "#ed0f7c",
        coordinateTwo: "B17",
        colorThree: "#f9eb2a",
        coordinateThree: "J2",
        colorFour: "#b3e2f2",
        coordinateFour: "J17",
    },
    {
        name: "",
        colorOne: "#9c3f20 ",
        coordinateOne: "B3",
        colorTwo: "#e90c8d",
        coordinateTwo: "B18",
        colorThree: "#fff539",
        coordinateThree: "J3",
        colorFour: "#ace4f3",
        coordinateFour: "J18",
    },
    {
        name: "",
        colorOne: "#ad3f24",
        coordinateOne: "B4",
        colorTwo: "#e02a8e",
        coordinateTwo: "B19",
        colorThree: "#f9ee46",
        coordinateThree: "J4",
        colorFour: "#9ddaf7",
        coordinateFour: "J19",
    },
    {
        name: "",
        colorOne: "#b93825",
        coordinateOne: "B5",
        colorTwo: "#cd3894",
        coordinateTwo: "B20",
        colorThree: "#f9f04d",
        coordinateThree: "J5",
        colorFour: "#87d6f7",
        coordinateFour: "J20",
    },
    {
        name: "",
        colorOne: "#c62d27",
        coordinateOne: "B6",
        colorTwo: "#bf3e98",
        coordinateTwo: "B21",
        colorThree: "#f9f25c",
        coordinateThree: "J6",
        colorFour: "#7dc7ee",
        coordinateFour: "J21",
    },
    {
        name: "",
        colorOne: "#d62827",
        coordinateOne: "B7",
        colorTwo: "#b43d97",
        coordinateTwo: "B22",
        colorThree: "#f7f06b",
        coordinateThree: "J7",
        colorFour: "#71b5e4",
        coordinateFour: "J22",
    },
    {
        name: "",
        colorOne: "#e42024",
        coordinateOne: "B8",
        colorTwo: "#a93c97",
        coordinateTwo: "B23",
        colorThree: "#efee82",
        coordinateThree: "J8",
        colorFour: "#65a8dc",
        coordinateFour: "J23",
    },
    {
        name: "",
        colorOne: "#ed2225",
        coordinateOne: "B9",
        colorTwo: "#9e3e97",
        coordinateTwo: "B24",
        colorThree: "#e7eb8c",
        coordinateThree: "J9",
        colorFour: "#5c97d1",
        coordinateFour: "J24",
    },
    {
        name: "",
        colorOne: "#ee272a",
        coordinateOne: "B10",
        colorTwo: "#963d97",
        coordinateTwo: "B25",
        colorThree: "#dee99d",
        coordinateThree: "J10",
        colorFour: "#518bca",
        coordinateFour: "J25",
    },
    {
        name: "",
        colorOne: "#ee2932",
        coordinateOne: "B11",
        colorTwo: "#913d9b",
        coordinateTwo: "B26",
        colorThree: "#d8e7ac",
        coordinateThree: "J11",
        colorFour: "#4b7cbf",
        coordinateFour: "J26",
    },
    {
        name: "",
        colorOne: "#ed263b",
        coordinateOne: "B12",
        colorTwo: "#843e97",
        coordinateTwo: "B27",
        colorThree: "#d3e8bf",
        coordinateThree: "J12",
        colorFour: "#3f6eb6",
        coordinateFour: "J27",
    },
    {
        name: "",
        colorOne: "#ed2041",
        coordinateOne: "B13",
        colorTwo: "#7d3e99",
        coordinateTwo: "B28",
        colorThree: "#d1e8cb",
        coordinateThree: "J13",
        colorFour: "#3765b0",
        coordinateFour: "J28",
    },
    {
        name: "",
        colorOne: "#ed1f4d",
        coordinateOne: "B14",
        colorTwo: "#723d97",
        coordinateTwo: "B29",
        colorThree: "#cde9d3",
        coordinateThree: "J14",
        colorFour: "#365bab",
        coordinateFour: "J29",
    },
    {
        name: "",
        colorOne: "#ed1c5e",
        coordinateOne: "B15",
        colorTwo: "#683b96",
        coordinateTwo: "B30",
        colorThree: "#c7e6d6",
        coordinateThree: "J15",
        colorFour: "#3050a3",
        coordinateFour: "J30",
    },
    {
        name: "",
        colorOne: "#a66128",
        coordinateOne: "C1",
        colorTwo: "#ee2b87",
        coordinateTwo: "C16",
        colorThree: "#f6ef3c",
        coordinateThree: "K1",
        colorFour: "#aeddd7",
        coordinateFour: "K16",
    },
    {
        name: "",
        colorOne: "#ac5b26",
        coordinateOne: "C2",
        colorTwo: "#eb3196",
        coordinateTwo: "C17",
        colorThree: "#f6ef3f",
        coordinateThree: "K2",
        colorFour: "#aaddde",
        coordinateFour: "K17",
    },
    {
        name: "",
        colorOne: "#ba5a27",
        coordinateOne: "C3",
        colorTwo: "#db4398",
        coordinateTwo: "C18",
        colorThree: "#f5ee46",
        coordinateThree: "K3",
        colorFour: "#a8dde3",
        coordinateFour: "K17",
    },
    {
        name: "",
        colorOne: "#c24e27",
        coordinateOne: "C4",
        colorTwo: "#ca499b",
        coordinateTwo: "C19",
        colorThree: "#f4ef4d",
        coordinateThree: "K4",
        colorFour: "#99d8e7",
        coordinateFour: "K19",
    },
    {
        name: "",
        colorOne: "#cd4827",
        coordinateOne: "C5",
        colorTwo: "#bb4b9d",
        coordinateTwo: "C20",
        colorThree: "#f1ec5a",
        coordinateThree: "K5",
        colorFour: "#89d7ee",
        coordinateFour: "K20",
    },
    {
        name: "",
        colorOne: "#d64027",
        coordinateOne: "C6",
        colorTwo: "#b4499b",
        coordinateTwo: "C21",
        colorThree: "#ecec68",
        coordinateThree: "K6",
        colorFour: "#73d1f5",
        coordinateFour: "K21",
    },
    {
        name: "",
        colorOne: "#e23926",
        coordinateOne: "C7",
        colorTwo: "#a64799",
        coordinateTwo: "C22",
        colorThree: "#e6e87a",
        coordinateThree: "K7",
        colorFour: "#64cbf4",
        coordinateFour: "K22",
    },
    {
        name: "",
        colorOne: "#ea3024",
        coordinateOne: "C8",
        colorTwo: "#9e4599",
        coordinateTwo: "C23",
        colorThree: "#dfe784",
        coordinateThree: "K8",
        colorFour: "#5fbbea",
        coordinateFour: "K23",
    },
    {
        name: "",
        colorOne: "#ee362c",
        coordinateOne: "C9",
        colorTwo: "#904193",
        coordinateTwo: "C24",
        colorThree: "#d7e586",
        coordinateThree: "K9",
        colorFour: "#5aaadd",
        coordinateFour: "K24",
    },
    {
        name: "",
        colorOne: "#ef3c40",
        coordinateOne: "C10",
        colorTwo: "#8c4299",
        coordinateTwo: "C25",
        colorThree: "#c8df8d",
        coordinateThree: "K10",
        colorFour: "#549dd4",
        coordinateFour: "K25",
    },
    {
        name: "",
        colorOne: "#ef3f4c",
        coordinateOne: "C11",
        colorTwo: "#843e97",
        coordinateTwo: "C26",
        colorThree: "#bedd97",
        coordinateThree: "K11",
        colorFour: "#4889c9",
        coordinateFour: "K26",
    },
    {
        name: "",
        colorOne: "#ee3b51",
        coordinateOne: "C12",
        colorTwo: "#793d97",
        coordinateTwo: "C27",
        colorThree: "#b5dba2",
        coordinateThree: "K12",
        colorFour: "#3e7dc0",
        coordinateFour: "K27",
    },
    {
        name: "",
        colorOne: "#ee3a5d",
        coordinateOne: "C13",
        colorTwo: "#733c97",
        coordinateTwo: "C28",
        colorThree: "#b4dbaf",
        coordinateThree: "K13",
        colorFour: "#3b6fb8",
        coordinateFour: "K28",
    },
    {
        name: "",
        colorOne: "#ee3167",
        coordinateOne: "C14",
        colorTwo: "#663996",
        coordinateTwo: "C29",
        colorThree: "#b0dab6",
        coordinateThree: "K14",
        colorFour: "#3664af",
        coordinateFour: "K29",
    },
    {
        name: "",
        colorOne: "#ee3078",
        coordinateOne: "C15",
        colorTwo: "#5a3191",
        coordinateTwo: "C30",
        colorThree: "#addbc1",
        coordinateThree: "K15",
        colorFour: "#335cab",
        coordinateFour: "K30",
    },
    {
        name: "",
        colorOne: "#c9822a",
        coordinateOne: "D1",
        colorTwo: "#f04f9d",
        coordinateTwo: "D16",
        colorThree: "#f1eb23",
        coordinateThree: "L1",
        colorFour: "#8dcfb3",
        coordinateFour: "L16",
    },
    {
        name: "",
        colorOne: "#d78228",
        coordinateOne: "D2",
        colorTwo: "#e056a1",
        coordinateTwo: "D17",
        colorThree: "#f0eb2d",
        coordinateThree: "L2",
        colorFour: "#8ed1c0",
        coordinateFour: "L17",
    },
    {
        name: "",
        colorOne: "#dd7627",
        coordinateOne: "D3",
        colorTwo: "#cd57a1",
        coordinateTwo: "D18",
        colorThree: "#ebe932",
        coordinateThree: "L3",
        colorFour: "#8bd1c6",
        coordinateFour: "L18",
    },
    {
        name: "",
        colorOne: "#e87824",
        coordinateOne: "D4",
        colorTwo: "#be5ea5",
        coordinateTwo: "D19",
        colorThree: "#e9e838",
        coordinateThree: "J4",
        colorFour: "#84cfcb",
        coordinateFour: "J19",
    },
    {
        name: "",
        colorOne: "#e66926",
        coordinateOne: "D5",
        colorTwo: "#b658a2",
        coordinateTwo: "D20",
        colorThree: "#e5e643",
        coordinateThree: "L5",
        colorFour: "#7acdd3",
        coordinateFour: "L20",
    },
    {
        name: "",
        colorOne: "#ea5d25",
        coordinateOne: "D6",
        colorTwo: "#a554a1",
        coordinateTwo: "D21",
        colorThree: "#dce453",
        coordinateThree: "L6",
        colorFour: "#69cada",
        coordinateFour: "L21",
    },
    {
        name: "",
        colorOne: "#f1602b",
        coordinateOne: "D7",
        colorTwo: "#9b4e9e",
        coordinateTwo: "D22",
        colorThree: "#d0df60",
        coordinateThree: "L7",
        colorFour: "#56c8e0",
        coordinateFour: "L22",
    },
    {
        name: "",
        colorOne: "#ef5533",
        coordinateOne: "D8",
        colorTwo: "#944c9e",
        coordinateTwo: "D23",
        colorThree: "#bfda67",
        coordinateThree: "L8",
        colorFour: "#3bc6ef",
        coordinateFour: "L23",
    },
    {
        name: "",
        colorOne: "#f04f3d",
        coordinateOne: "D9",
        colorTwo: "#8d499e",
        coordinateTwo: "D24",
        colorThree: "#b1d66d",
        coordinateThree: "L9",
        colorFour: "#38baec",
        coordinateFour: "L24",
    },
    {
        name: "",
        colorOne: "#ee5351",
        coordinateOne: "D10",
        colorTwo: "#82449a",
        coordinateTwo: "D25",
        colorThree: "#a8d377",
        coordinateThree: "L10",
        colorFour: "#3ca9e1",
        coordinateFour: "L25",
    },
    {
        name: "",
        colorOne: "#f05d65",
        coordinateOne: "D11",
        colorTwo: "#7b4198",
        coordinateTwo: "D26",
        colorThree: "#9fd07e",
        coordinateThree: "L11",
        colorFour: "#3b9ad4",
        coordinateFour: "L26",
    },
    {
        name: "",
        colorOne: "#f05e6b",
        coordinateOne: "D12",
        colorTwo: "#6f3e99",
        coordinateTwo: "D27",
        colorThree: "#98d089",
        coordinateThree: "L12",
        colorFour: "#4188c8",
        coordinateFour: "L27",
    },
    {
        name: "",
        colorOne: "#f05871",
        coordinateOne: "D13",
        colorTwo: "#663795",
        coordinateTwo: "D28",
        colorThree: "#92ce98",
        coordinateThree: "L13",
        colorFour: "#3879bd",
        coordinateFour: "L28",
    },
    {
        name: "",
        colorOne: "#f0537e",
        coordinateOne: "D14",
        colorTwo: "#583393",
        coordinateTwo: "D29",
        colorThree: "#8dcd9b",
        coordinateThree: "L14",
        colorFour: "#3b6fb8",
        coordinateFour: "L29",
    },
    {
        name: "",
        colorOne: "#ef4f8b",
        coordinateOne: "D15",
        colorTwo: "#472e8a",
        coordinateTwo: "D30",
        colorThree: "#8ecfa7",
        coordinateThree: "L15",
        colorFour: "#3465b1",
        coordinateFour: "L30",
    },
    {
        name: "",
        colorOne: "#e69c23",
        coordinateOne: "E1",
        colorTwo: "#e76fac",
        coordinateTwo: "E16",
        colorThree: "#e0e320",
        coordinateThree: "M1",
        colorFour: "#70c493",
        coordinateFour: "M16",
    },
    {
        name: "",
        colorOne: "#f1991e",
        coordinateOne: "E2",
        colorTwo: "#d072b0",
        coordinateTwo: "E17",
        colorThree: "#dbe127",
        coordinateThree: "M2",
        colorFour: "#70c59c",
        coordinateFour: "M17",
    },
    {
        name: "",
        colorOne: "#f7921c",
        coordinateOne: "E3",
        colorTwo: "#c771ae",
        coordinateTwo: "E18",
        colorThree: "#d6e12f",
        coordinateThree: "M3",
        colorFour: "#73c7a6",
        coordinateFour: "M18",
    },
    {
        name: "",
        colorOne: "#f68c1e",
        coordinateOne: "E4",
        colorTwo: "#bb71ae",
        coordinateTwo: "E19",
        colorThree: "#cedd38",
        coordinateThree: "M4",
        colorFour: "#75c8ac",
        coordinateFour: "M19",
    },
    {
        name: "",
        colorOne: "#f68525",
        coordinateOne: "E5",
        colorTwo: "#ac67aa",
        coordinateTwo: "E20",
        colorThree: "#c8db43",
        coordinateThree: "M5",
        colorFour: "#6bc6b4",
        coordinateFour: "M20",
    },
    {
        name: "",
        colorOne: "#f4782e",
        coordinateOne: "E6",
        colorTwo: "#9e5fa6",
        coordinateTwo: "E21",
        colorThree: "#bad645",
        coordinateThree: "M6",
        colorFour: "#60c6bb",
        coordinateFour: "M21",
    },
    {
        name: "",
        colorOne: "#f4773d",
        coordinateOne: "E7",
        colorTwo: "#935ba4",
        coordinateTwo: "E22",
        colorThree: "#aed24c",
        coordinateThree: "M7",
        colorFour: "#54c4c5",
        coordinateFour: "M22",
    },
    {
        name: "",
        colorOne: "#f36e45",
        coordinateOne: "E8",
        colorTwo: "#8c53a2",
        coordinateTwo: "E23",
        colorThree: "#9fcd51",
        coordinateThree: "M8",
        colorFour: "#47c3cf",
        coordinateFour: "M23",
    },
    {
        name: "",
        colorOne: "#f37052",
        coordinateOne: "E9",
        colorTwo: "#8451a0",
        coordinateTwo: "E24",
        colorThree: "#91ca59",
        coordinateThree: "M9",
        colorFour: "#32d7f5",
        coordinateFour: "M24",
    },
    {
        name: "",
        colorOne: "#f27767",
        coordinateOne: "E10",
        colorTwo: "#7a489d",
        coordinateTwo: "E25",
        colorThree: "#83c85e",
        coordinateThree: "M10",
        colorFour: "#1bbae4",
        coordinateFour: "M25",
    },
    {
        name: "",
        colorOne: "#f37674",
        coordinateOne: "E11",
        colorTwo: "#71429e",
        coordinateTwo: "E26",
        colorThree: "#79c469",
        coordinateThree: "M11",
        colorFour: "#289cd7",
        coordinateFour: "M26",
    },
    {
        name: "",
        colorOne: "#f37781",
        coordinateOne: "E12",
        colorTwo: "#623e98",
        coordinateTwo: "E27",
        colorThree: "#71c371",
        coordinateThree: "M12",
        colorFour: "#289cd7",
        coordinateFour: "M27",
    },
    {
        name: "",
        colorOne: "#f27789",
        coordinateOne: "E13",
        colorTwo: "#583393",
        coordinateTwo: "E28",
        colorThree: "#76cc81",
        coordinateThree: "M13",
        colorFour: "#378ccc",
        coordinateFour: "M28",
    },
    {
        name: "",
        colorOne: "#f27094",
        coordinateOne: "E14",
        colorTwo: "#492e8f",
        coordinateTwo: "E29",
        colorThree: "#6dc183",
        coordinateThree: "M14",
        colorFour: "#317fc1",
        coordinateFour: "M29",
    },
    {
        name: "",
        colorOne: "#f069a4",
        coordinateOne: "E15",
        colorTwo: "#342b84",
        coordinateTwo: "E30",
        colorThree: "#71c288",
        coordinateThree: "M15",
        colorFour: "#2c72b8",
        coordinateFour: "M30",
    },
    {
        name: "",
        colorOne: "#feb415",
        coordinateOne: "F1",
        colorTwo: "#e08dbb",
        coordinateTwo: "F16",
        colorThree: "#c2d82d",
        coordinateThree: "N1",
        colorFour: "#57bd7b",
        coordinateFour: "N16",
    },
    {
        name: "",
        colorOne: "#f7b428",
        coordinateOne: "F2",
        colorTwo: "#d18bbd",
        coordinateTwo: "F17",
        colorThree: "#bdd630",
        coordinateThree: "N2",
        colorFour: "#59bd7d",
        coordinateFour: "N17",
    },
    {
        name: "",
        colorOne: "#faab2c",
        coordinateOne: "F3",
        colorTwo: "#c58dbe",
        coordinateTwo: "F18",
        colorThree: "#b5d333",
        coordinateThree: "N3",
        colorFour: "#5cbf88",
        coordinateFour: "N18",
    },
    {
        name: "",
        colorOne: "#fdab3d",
        coordinateOne: "F4",
        colorTwo: "#b982b9",
        coordinateTwo: "F19",
        colorThree: "#abcf39",
        coordinateThree: "N4",
        colorFour: "#5fc08b",
        coordinateFour: "N19",
    },
    {
        name: "",
        colorOne: "#faa741",
        coordinateOne: "F5",
        colorTwo: "#aa7ab6",
        coordinateTwo: "F20",
        colorThree: "#a0cc39",
        coordinateThree: "N5",
        colorFour: "#60c092",
        coordinateFour: "N20",
    },
    {
        name: "",
        colorOne: "#f9a34c",
        coordinateOne: "F6",
        colorTwo: "#9c74b3",
        coordinateTwo: "F21",
        colorThree: "#94c93d",
        coordinateThree: "N6",
        colorFour: "#5bc09e",
        coordinateFour: "N21",
    },
    {
        name: "",
        colorOne: "#f69755",
        coordinateOne: "F7",
        colorTwo: "#9067ab",
        coordinateTwo: "F22",
        colorThree: "#82c341",
        coordinateThree: "N7",
        colorFour: "#50c2ab",
        coordinateFour: "N22",
    },
    {
        name: "",
        colorOne: "#f78e5e",
        coordinateOne: "F8",
        colorTwo: "#855da6",
        coordinateTwo: "F23",
        colorThree: "#79c143",
        coordinateThree: "N8",
        colorFour: "#46c0b3",
        coordinateFour: "N23",
    },
    {
        name: "",
        colorOne: "#f48864",
        coordinateOne: "F9",
        colorTwo: "#7b59a6",
        coordinateTwo: "F24",
        colorThree: "#6dbc45",
        coordinateThree: "N9",
        colorFour: "#36c0c3",
        coordinateFour: "N24",
    },
    {
        name: "",
        colorOne: "#f58873",
        coordinateOne: "F10",
        colorTwo: "#7251a2",
        coordinateTwo: "F25",
        colorThree: "#5db545",
        coordinateThree: "N10",
        colorFour: "#27bfcd",
        coordinateFour: "N25",
    },
    {
        name: "",
        colorOne: "#f58f83",
        coordinateOne: "F11",
        colorTwo: "#614c99",
        coordinateTwo: "F26",
        colorThree: "#54b34b",
        coordinateThree: "N11",
        colorFour: "#16b9d8",
        coordinateFour: "N26",
    },
    {
        name: "",
        colorOne: "#f28e8e",
        coordinateOne: "F12",
        colorTwo: "#5a429a",
        coordinateTwo: "F27",
        colorThree: "#4db254",
        coordinateThree: "N12",
        colorFour: "#0eaede",
        coordinateFour: "N27",
    },
    {
        name: "",
        colorOne: "#f48e99",
        coordinateOne: "F13",
        colorTwo: "#4c3293",
        coordinateTwo: "F28",
        colorThree: "#46b859",
        coordinateThree: "N13",
        colorFour: "#16a5dd",
        coordinateFour: "N28",
    },
    {
        name: "",
        colorOne: "#f48ca3",
        coordinateOne: "F14",
        colorTwo: "#392f8f",
        coordinateTwo: "F29",
        colorThree: "#49b869",
        coordinateThree: "N14",
        colorFour: "#2395d3",
        coordinateFour: "N29",
    },
    {
        name: "",
        colorOne: "#f287b5",
        coordinateOne: "F15",
        colorTwo: "#2c2978",
        coordinateTwo: "F30",
        colorThree: "#50bb73",
        coordinateThree: "N15",
        colorFour: "#2884c7",
        coordinateFour: "N30",
    },
    {
        name: "",
        colorOne: "#fdc113",
        coordinateOne: "G1",
        colorTwo: "#e1a5cb",
        coordinateTwo: "G16",
        colorThree: "#9ec439",
        coordinateThree: "O1",
        colorFour: "#37b65d",
        coordinateFour: "O16",
    },
    {
        name: "",
        colorOne: "#fdc029",
        coordinateOne: "G2",
        colorTwo: "#d0a6cc",
        coordinateTwo: "G17",
        colorThree: "#9ac43c",
        coordinateThree: "O2",
        colorFour: "#42b864",
        coordinateFour: "O17",
    },
    {
        name: "",
        colorOne: "#fcb72c",
        coordinateOne: "G3",
        colorTwo: "#cdadd2",
        coordinateTwo: "G18",
        colorThree: "#94c23c",
        coordinateThree: "O3",
        colorFour: "#46b96e",
        coordinateFour: "O18",
    },
    {
        name: "",
        colorOne: "#fcb43b",
        coordinateOne: "G4",
        colorTwo: "#b898c7",
        coordinateTwo: "G19",
        colorThree: "#88bf40",
        coordinateThree: "O4",
        colorFour: "#48ba72",
        coordinateFour: "O19",
    },
    {
        name: "",
        colorOne: "#fcb95e",
        coordinateOne: "G5",
        colorTwo: "#a88bc1",
        coordinateTwo: "G20",
        colorThree: "#7ebb42",
        coordinateThree: "O5",
        colorFour: "#51bc76",
        coordinateFour: "O20",
    },
    {
        name: "",
        colorOne: "#f9ab56",
        coordinateOne: "G6",
        colorTwo: "#9a82bc",
        coordinateTwo: "G21",
        colorThree: "#6db343",
        coordinateThree: "O6",
        colorFour: "#52bd85",
        coordinateFour: "O21",
    },
    {
        name: "",
        colorOne: "#faaa63",
        coordinateOne: "G7",
        colorTwo: "#8a76b5",
        coordinateTwo: "G22",
        colorThree: "#63b144",
        coordinateThree: "O7",
        colorFour: "#49bd90",
        coordinateFour: "O22",
    },
    {
        name: "",
        colorOne: "#f9a26d",
        coordinateOne: "G8",
        colorTwo: "#7f6eb2",
        coordinateTwo: "G23",
        colorThree: "#54a846",
        coordinateThree: "O8",
        colorFour: "#45be9f",
        coordinateFour: "O23",
    },
    {
        name: "",
        colorOne: "#f7a279",
        coordinateOne: "G9",
        colorTwo: "#7265ad",
        coordinateTwo: "G24",
        colorThree: "#4fa647",
        coordinateThree: "O9",
        colorFour: "#39bea9",
        coordinateFour: "O24",
    },
    {
        name: "",
        colorOne: "#f7a085",
        coordinateOne: "G10",
        colorTwo: "#675ca8",
        coordinateTwo: "G25",
        colorThree: "#409e46",
        coordinateThree: "O10",
        colorFour: "#2ebdb7",
        coordinateFour: "O25",
    },
    {
        name: "",
        colorOne: "#f69e94",
        coordinateOne: "G11",
        colorTwo: "#5954a4",
        coordinateTwo: "G26",
        colorThree: "#359d48",
        coordinateThree: "O11",
        colorFour: "#28bfc6",
        coordinateFour: "O26",
    },
    {
        name: "",
        colorOne: "#f69d99",
        coordinateOne: "G12",
        colorTwo: "#4f4b9f",
        coordinateTwo: "G27",
        colorThree: "#30a348",
        coordinateThree: "O12",
        colorFour: "#1bbdd2",
        coordinateFour: "O27",
    },
    {
        name: "",
        colorOne: "#f59ea6",
        coordinateOne: "G13",
        colorTwo: "#44419a",
        coordinateTwo: "G28",
        colorThree: "#2aaa4b",
        coordinateThree: "O13",
        colorFour: "#0eb3d3",
        coordinateFour: "O28",
    },
    {
        name: "",
        colorOne: "#f69baa",
        coordinateOne: "G14",
        colorTwo: "#313694",
        coordinateTwo: "G29",
        colorThree: "#2ab14b",
        coordinateThree: "O14",
        colorFour: "#0ea8da",
        coordinateFour: "O29",
    },
    {
        name: "",
        colorOne: "#f39dc2",
        coordinateOne: "G15",
        colorTwo: "#2b2f86",
        coordinateTwo: "G30",
        colorThree: "#31b454",
        coordinateThree: "O15",
        colorFour: "#199ed7",
        coordinateFour: "O30",
    },
    {
        name: "",
        colorOne: "#fcd017",
        coordinateOne: "H1",
        colorTwo: "#d8b7d6",
        coordinateTwo: "H16",
        colorThree: "#7ba541",
        coordinateThree: "P1",
        colorFour: "#20b14c",
        coordinateFour: "P16",
    },
    {
        name: "",
        colorOne: "#fecd2a",
        coordinateOne: "H2",
        colorTwo: "#cdb8d9",
        coordinateTwo: "H17",
        colorThree: "#76a940",
        coordinateThree: "P2",
        colorFour: "#2cb34c",
        coordinateFour: "P17",
    },
    {
        name: "",
        colorOne: "#ffc82f",
        coordinateOne: "H3",
        colorTwo: "#ccbddc",
        coordinateTwo: "H18",
        colorThree: "#6fa744",
        coordinateThree: "P3",
        colorFour: "#33b555",
        coordinateFour: "P18",
    },
    {
        name: "",
        colorOne: "#fdc941",
        coordinateOne: "H4",
        colorTwo: "#b4a9d3",
        coordinateTwo: "H19",
        colorThree: "#65a243",
        coordinateThree: "P4",
        colorFour: "#3ab65e",
        coordinateFour: "P19",
    },
    {
        name: "",
        colorOne: "#fec64b",
        coordinateOne: "H5",
        colorTwo: "#a79fce",
        coordinateTwo: "H20",
        colorThree: "#59a445",
        coordinateThree: "P5",
        colorFour: "#3eb865",
        coordinateFour: "P20",
    },
    {
        name: "",
        colorOne: "#fdbf58",
        coordinateOne: "H6",
        colorTwo: "#9794c9",
        coordinateTwo: "H21",
        colorThree: "#4c9f45",
        coordinateThree: "P6",
        colorFour: "#3fb970",
        coordinateFour: "P21",
    },
    {
        name: "",
        colorOne: "#fdbc60",
        coordinateOne: "H7",
        colorTwo: "#8388c2",
        coordinateTwo: "H22",
        colorThree: "#439845",
        coordinateThree: "P7",
        colorFour: "#39b97c",
        coordinateFour: "P22",
    },
    {
        name: "",
        colorOne: "#fcb96b",
        coordinateOne: "H8",
        colorTwo: "#757dbc",
        coordinateTwo: "H23",
        colorThree: "#399645",
        coordinateThree: "P8",
        colorFour: "#32ba8a",
        coordinateFour: "P23",
    },
    {
        name: "",
        colorOne: "#fbb379",
        coordinateOne: "H9",
        colorTwo: "#6a75b7",
        coordinateTwo: "H24",
        colorThree: "#299144",
        coordinateThree: "P9",
        colorFour: "#2cb996",
        coordinateFour: "P24",
    },
    {
        name: "",
        colorOne: "#fab083",
        coordinateOne: "H10",
        colorTwo: "#5c6ab1",
        coordinateTwo: "H25",
        colorThree: "#1e8943",
        coordinateThree: "P10",
        colorFour: "#21bba1",
        coordinateFour: "P25",
    },
    {
        name: "",
        colorOne: "#f9ae8e",
        coordinateOne: "H11",
        colorTwo: "#5161ae",
        coordinateTwo: "H26",
        colorThree: "#198b43",
        coordinateThree: "P11",
        colorFour: "#1abbac",
        coordinateFour: "P26",
    },
    {
        name: "",
        colorOne: "#f9b29e",
        coordinateOne: "H12",
        colorTwo: "#4859a7",
        coordinateTwo: "H27",
        colorThree: "#149145",
        coordinateThree: "P12",
        colorFour: "#18bcbd",
        coordinateFour: "P27",
    },
    {
        name: "",
        colorOne: "#f5b6ad",
        coordinateOne: "H13",
        colorTwo: "#3e4fa1",
        coordinateTwo: "H28",
        colorThree: "#159a47",
        coordinateThree: "P13",
        colorFour: "#14bcc7",
        coordinateFour: "P28",
    },
    {
        name: "",
        colorOne: "#f3b6b5",
        coordinateOne: "H14",
        colorTwo: "#2f449d",
        coordinateTwo: "H29",
        colorThree: "#18a149",
        coordinateThree: "P14",
        colorFour: "#10b7d7",
        coordinateFour: "P29",
    },
    {
        name: "",
        colorOne: "#ecb5c8",
        coordinateOne: "H15",
        colorTwo: "#253a97",
        coordinateTwo: "H30",
        colorThree: "#1bab4a",
        coordinateThree: "P15",
        colorFour: "#0fb1e2",
        coordinateFour: "P30",
    }
]

var heathScore = 0;
var elizabethScore = 0;
var justinScore = 0;
var ginaScore = 0;
var nickScore = 0;
var peterScore = 0;

var table = document.querySelector('#table');


$( document ).ready(function() {
    var turn = 1;
    currentPlayer = players[turn];
    var ascending = true;
    var endOfRound = false;
    var nextRound = false;
    $('#pickingPlayer').text(players[0].name);
    $('#pickingPlayer').css('color', players[0].color);
    $('#guessingPlayer').text(players[turn].name);
    $('#guessingPlayer').css('color', players[turn].color);

    table.addEventListener('click', function(e) {
        var td = e.target;
        
        if (endOfRound == false) {
            if (td.innerText == "") {
                td.innerText = currentPlayer.letter;
                td.style.color = currentPlayer.color;
                
                if (ascending == true) {
                    if (turn < (players.length - 1)) {
                        turn ++;
                        $('#guessingPlayer').text(players[turn].name);
                        $('#guessingPlayer').css('color', players[turn].color);
                    } else {
                        ascending = false;
                    };
                } else {
                    if (turn > 1) {
                        turn --;
                        $('#guessingPlayer').text(players[turn].name);
                        $('#guessingPlayer').css('color', players[turn].color);
                    } else {
                        players.move(0, players.length);
                        ascending = true;
                        endOfRound = true;
                    };
                };
                currentPlayer = players[turn];
            }; 
        } else {
            if (nextRound == false) {
                td.className = 'reveal';
                nextRound = true;
            } else {
                $("#table td").text("");
                $('#pickingPlayer').text(players[0].name);
                $('#pickingPlayer').css('color', players[0].color);
                $('#guessingPlayer').text(players[turn].name);
                $('#guessingPlayer').css('color', players[turn].color);
                $("#table td").removeClass("reveal");
                endOfRound = false;
                nextRound = false;
            }
        };
       
    });

    $('#score-list').append(`<div id="heath-score" class="player-score">
                                <h2 style="color: green">Heath:</h2>
                                <h2 id="heath-score-counter">${heathScore}</h2>
                            </div>`);

    $('#heath-score').click(function() {
        heathScore++
        $('#heath-score-counter').text(heathScore);
    });

    $('#score-list').append(`<div id="elizabeth-score" class="player-score">
                                <h2 style="color: red">Elizabeth:</h2>
                                <h2 id="elizabeth-score-counter">${elizabethScore}</h2>
                            </div>`);

    $('#elizabeth-score').click(function() {
        elizabethScore++
        $('#elizabeth-score-counter').text(elizabethScore);
    });

    $('#score-list').append(`<div id="justin-score" class="player-score">
                                <h2 style="color: blue">Justin:</h2>
                                <h2 id="justin-score-counter">${justinScore}</h2>
                            </div>`);

    $('#justin-score').click(function() {
        justinScore++
        $('#justin-score-counter').text(justinScore);
    });

    $('#score-list').append(`<div id="gina-score" class="player-score">
                                <h2 style="color: purple">Gina:</h2>
                                <h2 id="gina-score-counter">${ginaScore}</h2>
                            </div>`);

    $('#gina-score').click(function() {
        ginaScore++
        $('#gina-score-counter').text(ginaScore);
    });

    $('#score-list').append(`<div id="nick-score" class="player-score">
                                <h2 style="color: orange">Nick:</h2>
                                <h2 id="nick-score-counter">${nickScore}</h2>
                            </div>`);

    $('#nick-score').click(function() {
        nickScore++
        $('#nick-score-counter').text(nickScore);
    });

    $('#score-list').append(`<div id="peter-score" class="player-score">
                                <h2 style="color: orange">peter:</h2>
                                <h2 id="peter-score-counter">${peterScore}</h2>
                            </div>`);

    $('#peter-score').click(function() {
        peterScore++
    $('#peter-score-counter').text(peterScore);
    });    

    $('#card-btn').click(function() {
        drawCard();
    });
      
    var windowWidth = window.matchMedia("(max-width: 700px)");

    checkMobile(windowWidth);
});

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

function drawCard() {
    var randomNumOne = Math.floor(Math.random() * 120);
    var randomNumTwo = Math.floor(Math.random() * 120);
    var randomNumThree = Math.floor(Math.random() * 4);
    var randomNumFour = Math.floor(Math.random() * 4);
    $('body').empty();
    if (randomNumOne == randomNumTwo) {
        randomNumTwo = Math.floor(Math.random() * 120);
    };
    
    if (randomNumThree == 0) {
        var hexOne = cards[randomNumOne].colorOne;
        var coordOne = cards[randomNumOne].coordinateOne;
    } else if (randomNumThree == 1) {
        var hexOne = cards[randomNumOne].colorTwo;
        var coordOne = cards[randomNumOne].coordinateTwo;
    } else if (randomNumThree == 2) {
        var hexOne = cards[randomNumOne].colorThree;
        var coordOne = cards[randomNumOne].coordinateThree;
    } else if (randomNumThree == 3) {
        var hexOne = cards[randomNumOne].colorFour;
        var coordOne = cards[randomNumOne].coordinateFour;
    };

    if (randomNumFour == 0) {
        var hexTwo = cards[randomNumTwo].colorOne;
        var coordTwo = cards[randomNumTwo].coordinateOne;
    } else if (randomNumFour == 1) {
        var hexTwo = cards[randomNumTwo].colorTwo;
        var coordTwo = cards[randomNumTwo].coordinateTwo;
    } else if (randomNumFour == 2) {
        var hexTwo = cards[randomNumTwo].colorFour;
        var coordTwo = cards[randomNumTwo].coordinateThree;
    } else if (randomNumFour == 3) {
        var hexTwo = cards[randomNumTwo].colorFour;
        var coordTwo = cards[randomNumTwo].coordinateFour;
    };

    $('body').append(`<div id="card-container">
                        <div id="card-content">
                            <div id="color-one"><h1>${coordOne}</h1></div>
                            <div id="color-two"><h1>${coordTwo}</h1></div>
                        </div>
                        <div id="reroll">Reroll</div>
                    </div>`);

    console.log('Color 1: ' + hexOne + ' ' + coordOne);
    console.log('Color 2: ' + hexTwo + ' ' + coordTwo);

    $('#color-one').css('background-color', hexOne);
    $('#color-two').css('background-color', hexTwo);

    $('#reroll').click(function() {
        drawCard();
    });
}

function checkMobile(x) {
    if (x.matches) { // If media query matches
      drawCard();
    }
}