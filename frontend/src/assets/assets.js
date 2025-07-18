const productCatagory=[
  {
    name:'Fasteners',
    info:'Bolts, screws, nuts, washers, and specialized fastening solutions for all construction needs.',
    image:'/images/nut.jpg'
  },
  {
    name:'Power Tools',
    info:'Professional-grade drills, saws, grinders, and cutting equipment from top brands.',
    image:'/images/powertool.avif'
  },
  {
    name:'Building Materials',
    info:'High-quality plywood, lumber, cement, and structural materials for construction projects.',
    image:'/images/material.avif'
  },
  {
    name:'Fitouts Materials',
    info:'Interior finishing materials, tiles, flooring, and decorative elements for complete projects.',
    image:'/images/fitouts.avif'
  }
]



  const products = [
    {
      "pname": "STEEL CUTTING DISC",
      "pCode": "51120101001",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4\"", "4.5\"", "5\"", "7\"", "9\" (THICKNESS 1 MM)"],
      "pprice": [1.25, 1.50, 3.5, 6, 4],
      "category": "Power Tools"
    },
    {
      "pname": "DIAMOND CUTTING DISC",
      "pCode": "51120101002",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4\"", "4.5\"", "5\"", "7\"", "9\"", "12\"", "14\" (THICKNESS 3MM)"],
      "pprice": [12, 15, 20, 25, 45, 55],
      "category": "Power Tools"
    },
    {
      "pname": "TILE CUTTING DISC",
      "pCode": "51120101003",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4.5\""],
      "pprice": [15.00],
      "category": "Power Tools"
    },
    {
      "pname": "CIRCULAR SAW BLADE",
      "pCode": "51120101004",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["9\""],
      "pprice": [25.00],
      "category": "Power Tools"
    },
    {
      "pname": "DIAMOND CUP GRINDING WHEEL",
      "pCode": "51120101005",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4.5\"", "9\""],
      "pprice": [15, 45],
      "category": "Power Tools"
    },
    {
      "pname": "FISH SCALE GRINDING DISC",
      "pCode": "51120101006",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4.5 \"", "9\""],
      "pprice": [2.5, 5],
      "category": "Power Tools"
    },
    {
      "pname": "STEEL GRINDING DISC",
      "pCode": "51120101007",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4.5 \"", "9\""],
      "pprice": [45722.00],
      "category": "Power Tools"
    },
    {
      "pname": "TILE GRINDING DISC",
      "pCode": "51120101008",
      "pBrand": ["DEWALT", "LASERCUT", "ELITE", "ABRACAS"],
      "psize": ["4.5 \"", "9\""],
      "pprice": [25, 35],
      "category": "Power Tools"
    },
    {
      "pname": "STEEL BINDING WIRE",
      "pCode": "51120101009",
      "pBrand": ["GENERIC"],
      "psize": ["10 KG ROLL"],
      "pprice": [35.00],
      "category": "Fasteners"
    },
    {
      "pname": "GALVANIZED BINDING WIRE",
      "pCode": "51120101010",
      "pBrand": ["GENERIC"],
      "psize": ["10 KG ROLL"],
      "pprice": [36.00],
      "category": "Fasteners"
    },
    {
      "pname": "STEEL WIRE NAIL",
      "pCode": "51120101011",
      "pBrand": ["GENERIC"],
      "psize": ["1\"", "1.5\"", "2\"", "2.5\"", "3\""],
      "pprice": [55.00],
      "category": "Fasteners"
    },
    {
      "pname": "STEEL WHITE NAIL",
      "pCode": "51120101012",
      "pBrand": ["GENERIC"],
      "psize": ["1\"", "1.5\"", "2\"", "2.5\"", "3\""],
      "pprice": [90.00],
      "category": "Fasteners"
    },
    {
      "pname": "ROUND SELF TAPING SCREW",
      "pCode": "51120101013",
      "pBrand": ["GENERIC"],
      "psize": ["4.2 x 13", "4.2 x 19", "4.2 x 38", "4.8 x 38", "6.3 x 80"],
      "pprice": [18, 25, 30],
      "category": "Fasteners"
    },
    {
      "pname": "FLAT SELF TAPING SCREW",
      "pCode": "51120101014",
      "pBrand": ["GENERIC"],
      "psize": ["1\"", "2\"", "3\""],
      "pprice": [19, 25, 30],
      "category": "Fasteners"
    },
    {
      "pname": "WOOD SCREW / WIRE NAIL",
      "pCode": "51120101015",
      "pBrand": ["GENERIC"],
      "psize": ["60 x 6"],
      "pprice": [17.00],
      "category": "Fasteners"
    },
    {
      "pname": "HEXAGONA SELF TAPPING SCREW",
      "pCode": "51120101016",
      "pBrand": ["GENERIC"],
      "psize": ["4.2 × 13 mm", "4.2 × 19 mm", "4.2 × 38 mm", "4.8 × 19 mm", "4.8 × 38 mm", "6.3 × 50 mm", "6.3 × 80 mm", "6 mm × 25 mm (1 inch)"],
      "pprice": [6.00, 12.00, 8.00, 7.00, 17.00, 19.00, 23.00, 11.00],
      "category": "Fasteners"
    },
    {
      "pname": "CROSS ROUND HEAD SELF TAPPING SCREW",
      "pCode": "51120101017",
      "pBrand": ["GENERIC"],
      "psize": ["M1.2 to M4, lengths 4mm to 20mm"],
      "pprice": [29.19, 70],
      "category": "Fasteners"
    },
    {
      "pname": "SCREW WITH PVC PLUG",
      "pCode": "51120101018",
      "pBrand": ["GENERIC"],
      "psize": ["6x32mm, assorted sizes"],
      "pprice": [42.90, 50],
      "category": "Fasteners"
    },
    {
      "pname": "COACH SCREW",
      "pCode": "51120101019",
      "pBrand": ["TITAN"],
      "psize": ["M6 to M12, lengths 50mm to 150mm"],
      "pprice": [10, 20],
      "category": "Fasteners"
    },
    {
      "pname": "ANCHOR BOLT",
      "pCode": "51120101020",
      "pBrand": ["UXCELL"],
      "psize": ["M6 to M16, lengths 50mm to 150mm"],
      "pprice": [15, 50],
      "category": "Fasteners"
    },
    {
      "pname": "EYE BOLT",
      "pCode": "51120101021",
      "pBrand": ["DIALL", "HAMPTON"],
      "psize": ["M6 to M12, lengths 60mm to 100mm"],
      "pprice": [17, 40],
      "category": "Fasteners"
    },
    {
      "pname": "TURNBUCKLE",
      "pCode": "51120101022",
      "pBrand": ["GENERIC", "NEWCORE GLOBAL"],
      "psize": ["M6 to M12, lengths 100mm to 200mm"],
      "pprice": [20, 60],
      "category": "Fasteners"
    },
    {
      "pname": "J BOLTS",
      "pCode": "51120101023",
      "pBrand": ["NATIONAL HARDWARE"],
      "psize": ["1/4\" x 4\" to 5/8\" x 12\""],
      "pprice": [26, 204],
      "category": "Fasteners"
    },
    {
      "pname": "EXTERNAL EXPANSION SCREW WITH HOOK",
      "pCode": "51120101024",
      "pBrand": ["WKOA"],
      "psize": ["M6 x 100mm", "M8 x 80mm"],
      "pprice": [],
      "category": "Fasteners"
    },
    {
      "pname": "EXPANSION BOLT",
      "pCode": "51120101025",
      "pBrand": ["ROYAL INDUSTRIAL"],
      "psize": ["M6 to M12, lengths 50mm to 100mm"],
      "pprice": [50, 70],
      "category": "Fasteners"
    },
    {
      "pname": "ANCHOR EXPANSION BOLT",
      "pCode": "51120101026",
      "pBrand": ["FISCHER", "HILTI", "RAWL", "MATRIX", "MUNGO"],
      "psize": ["M6 to M16, lengths 50mm to 150mm"],
      "pprice": [15, 30],
      "category": "Fasteners"
    },
    {
      "pname": "DROP IN ANCHORS",
      "pCode": "51120101027",
      "pBrand": ["GESIPA", "POP", "STANLEY", "FASTENWELL", "HONSEL"],
      "psize": ["M6 to M12, lengths 25mm to 50mm"],
      "pprice": [20, 40],
      "category": "Fasteners"
    },
    {
      "pname": "BLIND RIVETS",
      "pCode": "51120101028",
      "pBrand": ["BOSCH", "MAKITA", "DEWALT", "HILTI", "IRWIN", "MILWAUKEE"],
      "psize": ["4.8mm x 10mm", "4.8 MM X 12 MM", "4.8 MM X 18 MM", "4.8 MM X 20 MM"],
      "pprice": [34, 56, 42, 81, 83],
      "category": "Fasteners"
    },
  
    
    {
      "pname": "DRILL BIT",
      "pCode": "51120101029",
      "pBrand": ["GENERIC"],
      "psize": ["2 MM", "3 MM", "4 MM", "5 MM", "6 MM", "8 MM", "10 MM", "12 MM"],
      "pprice": [4, 6, 8, 10, 12, 14, 16, 18],
      "category": "Power Tools"
    },
    {
      "pname": "TWIST DRILL BIT",
      "pCode": "51120101030",
      "pBrand": ["AL ARQAM"],
      "psize": ["3 MM", "4 MM", "5 MM", "6 MM", "8 MM", "10 MM", "12 MM"],
      "pprice": [8, 10, 12, 14, 16, 18, 20],
      "category": "Power Tools"
    },
    {
      "pname": "CORNING DRILL BIT",
      "pCode": "51120101031",
      "pBrand": ["GENERIC"],
      "psize": ["25.0 x 400 mm (SDS Plus)", "4\" (102 mm) diamond core bits"],
      "pprice": [48, 216],
      "category": "Power Tools"
    },
    {
      "pname": "ELECTRIC HAMMER CHISEL HEAD",
      "pCode": "51120101032",
      "pBrand": ["ACONNET"],
      "psize": ["16\" bull point and flat chisels, 1-1/8\" hex shank"],
      "pprice": [15.00],
      "category": "Power Tools"
    },
    {
      "pname": "WASHER",
      "pCode": "51120101033",
      "pBrand": ["FRENZELIT"],
      "psize": ["NA"],
      "pprice": [7.00],
      "category": "Fasteners"
    },
    {
      "pname": "GALVANIZED GASKET",
      "pCode": "51120101034",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["Sizes vary; typically used in plumbing and industrial applications"],
      "pprice": [2, 10],
      "category": "Building Materials"
    },
    {
      "pname": "U BOLT",
      "pCode": "51120101035",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["7.9 mm", "27 mm", "90 x 6 mm", "0.8 x 3.5 x 9.9 cm"],
      "pprice": [7, 35],
      "category": "Fasteners"
    },
    {
      "pname": "BOLT",
      "pCode": "51120101036",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["M6 – M36"],
      "pprice": [0.50, 5.00],
      "category": "Fasteners"
    },
    {
      "pname": "ALLEN BOLTS",
      "pCode": "51120101037",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["M3 – M36"],
      "pprice": [0.60, 6.00],
      "category": "Fasteners"
    },
    {
      "pname": "CHEMICAL ANCHOR",
      "pCode": "51120101038",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["M8 x 110mm to M20 x 260mm"],
      "pprice": [10.50, 12.00],
      "category": "Fasteners"
    },
    {
      "pname": "MACHINE SCREWS",
      "pCode": "51120101039",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["M3 – M12"],
      "pprice": [0.30, 2.00],
      "category": "Fasteners"
    },
    {
      "pname": "MS CARRIAGE BOLTS & NUTS",
      "pCode": "51120101040",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["M6 – M16"],
      "pprice": [1.00, 3.00],
      "category": "Fasteners"
    },
    {
      "pname": "NUT",
      "pCode": "51120101041",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["M3 – M52"],
      "pprice": [0.20, 2.00],
      "category": "Fasteners"
    },
    {
      "pname": "LONG NUTS",
      "pCode": "51120101042",
      "pBrand": ["DIALL"],
      "psize": ["M6 – M20"],
      "pprice": [0.50, 2.50],
      "category": "Fasteners"
    },
    {
      "pname": "ROOFING NAILS",
      "pCode": "51120101043",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["1\" to 3\""],
      "pprice": [0.10, 0.50],
      "category": "Fasteners"
    },
    {
      "pname": "ROOFING BOLTS & NUTS",
      "pCode": "51120101044",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["VARIOUS SIZES"],
      "pprice": [15, 45],
      "category": "Fasteners"
    },
    {
      "pname": "GUN NAIL WITH PVC WASHER",
      "pCode": "51120101045",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["27 MM", "32 MM"],
      "pprice": [6, 10],
      "category": "Fasteners"
    },
    {
      "pname": "BULLET FOR NAIL GUN",
      "pCode": "51120101046",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["27 calibre long, 6.8/18 M10"],
      "pprice": [15.00],
      "category": "Fasteners"
    },
    {
      "pname": "ART KNIFE",
      "pCode": "51120101047",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["STANDARD SIZE"],
      "pprice": [6.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "ART KNIFE BLADE",
      "pCode": "51120101048",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["STANDARD SIZE"],
      "pprice": [0.75],
      "category": "Fitouts Materials"
    },
    {
      "pname": "DRIVE BIT HEAD +",
      "pCode": "51120101049",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["STANDARD SIZE"],
      "pprice": [1.50],
      "category": "Power Tools"
    },
    {
      "pname": "SCREW BITS",
      "pCode": "51120101050",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["Various sizes included in 32-piece sets"],
      "pprice": [32.00],
      "category": "Power Tools"
    },
    {
      "pname": "CROSS HEAD BIT",
      "pCode": "51120101051",
      "pBrand": ["MAKITA"],
      "psize": ["PH0", "PH1", "PH2", "PH3"],
      "pprice": [41.51],
      "category": "Power Tools"
    },
    {
      "pname": "PENTAGON HEAD BIT",
      "pCode": "51120101052",
      "pBrand": ["BOSCH", "DEWALT"],
      "psize": ["H3", "H4.3", "H6.7", "H7", "H7.6"],
      "pprice": [115.00],
      "category": "Power Tools"
    },
    {
      "pname": "JIG SAW BLADE",
      "pCode": "51120101053",
      "pBrand": ["BUILDMATE"],
      "psize": ["T-Shank, 75mm, wood/metal use"],
      "pprice": [10.00],
      "category": "Power Tools"
    },
    {
      "pname": "RECIPROCATING SAW BLADE",
      "pCode": "51120101054",
      "pBrand": ["SAFETY HUB"],
      "psize": ["6\"", "9\"", "12\"", "for wood/metal"],
      "pprice": [15.00, 35.00],
      "category": "Power Tools"
    },
    {
      "pname": "ROCK WOOL NAIL",
      "pCode": "51120101055",
      "pBrand": ["CLARKE", "ROLL ROY"],
      "psize": ["110mm", "120mm", "160mm", "180mm"],
      "pprice": [28.00],
      "category": "Fasteners"
    },
    {
      "pname": "ROLLER FRAME",
      "pCode": "51120101056",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["4\"", "7\"", "9\"", "12\""],
      "pprice": [5.25, 8.50],
      "category": "Fitouts Materials"
    },
    {
      "pname": "PAINT ROLLER REFILL",
      "pCode": "51120101057",
      "pBrand": ["METALSTRAP"],
      "psize": ["4 inch", "7 inch", "9 inch"],
      "pprice": [2, 4],
      "category": "Fitouts Materials"
    },
    {
      "pname": "PAINT ROLLER REFILL (SMALL)",
      "pCode": "51120101058",
      "pBrand": ["GENERIC"],
      "psize": ["4 inch", "6 inch", "8 inch"],
      "pprice": [1.57, 27.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "STEEL ROUND WIRE BRUSH",
      "pCode": "51120101059",
      "pBrand": ["PARKER"],
      "psize": ["Widths: 12mm, 16mm, 19mm; Thickness: 0.5mm – 0.8mm; Length: 30m – 50m rolls"],
      "pprice": [15.00, 25.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "METAL BINDING STRAP",
      "pCode": "51120101060",
      "pBrand": ["ARMSTRONG", "DORFIT", "SYOSI", "AL ARQAM"],
      "psize": ["Sizes compatible with 12mm, 16mm, and 19mm straps"],
      "pprice": [48.00, 120.00],
      "category": "Fasteners"
    },
    {
      "pname": "BINDING BUCKLE",
      "pCode": "51120101061",
      "pBrand": ["YALE", "DORFIT"],
      "psize": ["Standard sizes for drawers and cabinets"],
      "pprice": [0.50, 1.50],
      "category": "Fasteners"
    },
    {
      "pname": "DRAWER HARDWARE LOCK WITH KEYS",
      "pCode": "51120101062",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["Standard sizes for drawers and cabinets"],
      "pprice": [10.00, 15.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "PADLOCK",
      "pCode": "51120101063",
      "pBrand": ["VARIOUS LOCAL BRANDS"],
      "psize": ["50 MM", "60 MM", "70 MM", "80 MM"],
      "pprice": [10, 20, 30, 40],
      "category": "Fitouts Materials"
    },
    {
      "pname": "LOCK CYLINDER FOR DRAWER",
      "pCode": "51120101064",
      "pBrand": ["UKEN"],
      "psize": ["11mm", "16mm", "22mm", "25mm"],
      "pprice": [3.5, 6],
      "category": "Fitouts Materials"
    },
    {
      "pname": "LOCK CYLINDERS",
      "pCode": "51120101065",
      "pBrand": ["UKEN"],
      "psize": ["60mm", "70mm", "80mm (Euro Profile)"],
      "pprice": [6.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "THREADED BAR",
      "pCode": "51120101066",
      "pBrand": ["ACE", "KING TONY", "TOTAL"],
      "psize": ["8 MM"],
      "pprice": [3.00],
      "category": "Building Materials"
    },
    {
      "pname": "ALUMINUM SCRAPER / PATTI",
      "pCode": "51120101067",
      "pBrand": ["UXCELL", "DINGQI", "ABBASALI"],
      "psize": ["6 MTR"],
      "pprice": [60.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "RUSH COAT MACHINE",
      "pCode": "51120101068",
      "pBrand": ["SYK", "GENERIC"],
      "psize": ["Dimensions: 10 x 10 x 10 cm; Weight: 2 kg. Source"],
      "pprice": [20, 40],
      "category": "Power Tools"
    },
    {
      "pname": "RUSH COAT MACHINE CORE",
      "pCode": "51120101069",
      "pBrand": ["SECKAI", "GENERIC"],
      "psize": ["Specific dimensions vary by manufacturer; typically designed to fit standard rush coat machines."],
      "pprice": [45950.00],
      "category": "Power Tools"
    },
    {
      "pname": "SOCKET",
      "pCode": "51120101070",
      "pBrand": ["BITNEX", "GENERIC"],
      "psize": ["Drive Sizes: 1/4\", 3/8\", 1/2\"; Socket Sizes: 4mm to 32mm; Set configurations vary (e.g., 17-piece, 24-piece sets)."],
      "pprice": [90, 210],
      "category": "Power Tools"
    },
    {
      "pname": "WOOD HOLE OPENER",
      "pCode": "51120101071",
      "pBrand": ["GENERIC"],
      "psize": ["Sizes range from 10mm to 80mm; includes Forstner bits and hole saw kits."],
      "pprice": [13, 140],
      "category": "Power Tools"
    },
    {
      "pname": "METAL HOLE OPENER",
      "pCode": "51120101072",
      "pBrand": ["DUBAI STEEL", "LOCAL MANUFACTURERS"],
      "psize": ["NA"],
      "pprice": [90.00],
      "category": "Power Tools"
    },
    {
      "pname": "TILE HOLE OPENER",
      "pCode": "51120101073",
      "pBrand": ["DUBAI STEEL", "LOCAL MANUFACTURERS"],
      "psize": ["NA"],
      "pprice": [110.00],
      "category": "Power Tools"
    },
    {
      "pname": "TILE FILER",
      "pCode": "51120101074",
      "pBrand": ["GENERIC"],
      "psize": ["NA"],
      "pprice": [5.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "BEARING BLADE FOR TILE CUTTER",
      "pCode": "51120101075",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["4.5\""],
      "pprice": [15.00],
      "category": "Power Tools"
    },
    {
      "pname": "SQUARE STEEL",
      "pCode": "51120101076",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["6 MTR X VARIOUS SIZES"],
      "pprice": [60, 140],
      "category": "Building Materials"
    },
    {
      "pname": "ANGLE STEEL",
      "pCode": "51120101077",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["25MM"],
      "pprice": [105.00],
      "category": "Building Materials"
    },
    {
      "pname": "PLUMMET / PLUMBOB",
      "pCode": "51120101078",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["500 GMS"],
      "pprice": [5.00],
      "category": "Building Materials"
    },
    {
      "pname": "D SHACKLE",
      "pCode": "51120101079",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["19MM"],
      "pprice": [70.00],
      "category": "Fasteners"
    },
    {
      "pname": "IRON CHAINS",
      "pCode": "51120101080",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["5 MM / 8 MM / 10 MM ( X 25 MTR )"],
      "pprice": [21, 35, 40],
      "category": "Building Materials"
    },
    {
      "pname": "HINGE",
      "pCode": "51120101081",
      "pBrand": ["GENERIC"],
      "psize": ["3 \"", "4 \""],
      "pprice": [2, 3.5],
      "category": "Fitouts Materials"
    },
    {
      "pname": "FURNITURE HINGS",
      "pCode": "51120101082",
      "pBrand": ["GENERIC"],
      "psize": ["2\" - 6\""],
      "pprice": [2.9, 15],
      "category": "Fitouts Materials"
    },
    {
      "pname": "DOOR LATCH",
      "pCode": "51120101083",
      "pBrand": ["GENERIC"],
      "psize": ["Standard sizes"],
      "pprice": [5.50],
      "category": "Fitouts Materials"
    },
    {
      "pname": "TOWER BOLTS",
      "pCode": "51120101084",
      "pBrand": ["GENERIC"],
      "psize": ["75mm"],
      "pprice": [10.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "DOOR HANDLE",
      "pCode": "51120101085",
      "pBrand": ["GENERIC"],
      "psize": ["Various designs and finishes"],
      "pprice": [60.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "DOOR HINGE",
      "pCode": "51120101086",
      "pBrand": ["GENERIC"],
      "psize": ["Grade 13, 3D adjustable concealed hinges"],
      "pprice": [15.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "DOOR CLOSERS",
      "pCode": "51120101087",
      "pBrand": ["GENERIC"],
      "psize": ["Standard arm, electro-magnetic"],
      "pprice": [55.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "DOOR STOPPER",
      "pCode": "51120101088",
      "pBrand": ["GENERIC"],
      "psize": ["Magnetic, floor-mounted"],
      "pprice": [12.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "PULL & PUSH PLATES WITH HANDLE",
      "pCode": "51120101089",
      "pBrand": ["GENERIC"],
      "psize": ["Standard sizes"],
      "pprice": [60.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "KEY LOCKER BOX",
      "pCode": "51120101090",
      "pBrand": ["GENERIC"],
      "psize": ["100-key capacity"],
      "pprice": [70, 250],
      "category": "Fitouts Materials"
    },
    {
      "pname": "WELDING ROD",
      "pCode": "51120101091",
      "pBrand": ["GENERIC"],
      "psize": ["Various types (e.g., E6013, E7018)"],
      "pprice": [16.00],
      "category": "Building Materials"
    },
    {
      "pname": "DRAWER SLIDES",
      "pCode": "51120101092",
      "pBrand": ["GENERIC"],
      "psize": ["Heavy-duty, 227kg capacity"],
      "pprice": [30.00],
      "category": "Fitouts Materials"
    },
    {
      "pname": "SPRING NUTS",
      "pCode": "51120101093",
      "pBrand": ["GENERIC"],
      "psize": ["3/8 inch"],
      "pprice": [4.00],
      "category": "Fasteners"
    },
    {
      "pname": "METAL CLAMP",
      "pCode": "51120101094",
      "pBrand": ["GENERIC"],
      "psize": ["Mini 1 inch"],
      "pprice": [2.00],
      "category": "Fasteners"
    },
    {
      "pname": "CODE NAIL",
      "pCode": "51120101095",
      "pBrand": ["GENERIC"],
      "psize": ["Various sizes"],
      "pprice": [35.00],
      "category": "Fasteners"
    },
    {
      "pname": "PVC WALL PLUGS",
      "pCode": "51120101096",
      "pBrand": ["ROBIN"],
      "psize": ["6mm, pack of 50"],
      "pprice": [3.00],
      "category": "Fasteners"
    },
    {
      "pname": "BUTTERFLY PLUG",
      "pCode": "51120101097",
      "pBrand": ["DEWALT"],
      "psize": ["Various sizes"],
      "pprice": [4.00],
      "category": "Fasteners"
    },
    {
      "pname": "WALL POLISHING MACHINE",
      "pCode": "51120103039",
      "pBrand": ["BOSCH ITALIAN"],
      "psize": ["NOS"],
      "pprice": [450.00],
      "category": "Power Tools"
    },
    {
      "pname": "CENTRIFUGAL BLOWER",
      "pCode": "51120103041",
      "pBrand": ["MAXIITO"],
      "psize": ["12\""],
      "pprice": [365.00],
      "category": "Power Tools"
    },
    {
      "pname": "AIR BLOW DUST GUN",
      "pCode": "51120103042",
      "pBrand": ["IZUMI (JAPAN)", "KLAUKE", "GREENLEE (GERMANY/USA)", "TAKURA", "TLP", "JETECH", "MILWAUKEE TOOLS"],
      "psize": ["STANDARD SIZE"],
      "pprice": [75.00],
      "category": "Power Tools"
    },
    {
      "pname": "CONCRETE POLISHING MACHINE",
      "pCode": "51120103043",
      "pBrand": ["MAKITA"],
      "psize": ["STANDARD SIZE"],
      "pprice": [1900.00],
      "category": "Power Tools"
    },
    {
      "pname": "FLOOR GRINDING MACHINE",
      "pCode": "51120103044",
      "pBrand": ["CLARKE"],
      "psize": ["STANDARD SIZE"],
      "pprice": [750.00],
      "category": "Power Tools"
    },
    {
      "pname": "TILE CUTTER BENCH",
      "pCode": "51120103045",
      "pBrand": ["BOSCH"],
      "psize": ["STANDARD SIZE"],
      "pprice": [1400.00],
      "category": "Power Tools"
    },
    {
      "pname": "SAND BLASTING MACHINE",
      "pCode": "51120103046",
      "pBrand": ["CLARKE"],
      "psize": ["STANDARD SIZE"],
      "pprice": [2100.00],
      "category": "Power Tools"
    },
    {
      "pname": "CORDLESS HYDRAULIC CABLE CRIMPING TOOL",
      "pCode": "51120103047",
      "pBrand": ["MAKITA"],
      "psize": ["STANDARD SIZE"],
      "pprice": [560.00],
      "category": "Power Tools"
    },
    {
      "pname": "CORDLESS ANGLE DILL MACHINE",
      "pCode": "51120103023",
      "pBrand": ["CLARKE"],
      "psize": ["STANDARD SIZE"],
      "pprice": [990.60],
      "category": "Power Tools"
    },
    {
      "pname": "WATER CONCRETE CORING MACHINE",
      "pCode": "51120103024",
      "pBrand": ["BOSCH"],
      "psize": ["STANDARD SIZE"],
      "pprice": [1105.00],
      "category": "Power Tools"
    },
    {
      "pname": "CIRCULAR SAW MACHINE GKS 235",
      "pCode": "51120103025",
      "pBrand": ["ROBBIN"],
      "psize": ["STANDARD SIZE"],
      "pprice": [819.00],
      "category": "Power Tools"
    },
    {
      "pname": "BENCH GRINDER",
      "pCode": "51120103026",
      "pBrand": ["ROBIN"],
      "psize": ["STANDARD SIZE"],
      "pprice": [253.50],
      "category": "Power Tools"
    },
    {
      "pname": "FLAT EDGE TRIMMER",
      "pCode": "51120103027",
      "pBrand": ["ROBIN"],
      "psize": ["STANDARD SIZE"],
      "pprice": [388.70],
      "category": "Power Tools"
    },
    {
      "pname": "MITER SAW",
      "pCode": "51120103028",
      "pBrand": ["CLARKE"],
      "psize": ["STANDARD SIZE"],
      "pprice": [559.00],
      "category": "Power Tools"
    },
    {
      "pname": "GROOVING MACHINE",
      "pCode": "51120103029",
      "pBrand": ["BOSCH"],
      "psize": ["STANDARD SIZE"],
      "pprice": [990.00],
      "category": "Power Tools"
    },
    {
      "pname": "RECIPROCAL SAW",
      "pCode": "51120103030",
      "pBrand": ["VEVOR"],
      "psize": ["STANDARD SIZE"],
      "pprice": [767.00],
      "category": "Power Tools"
    },
    {
      "pname": "GASOLINE COMPACTOR",
      "pCode": "51120103031",
      "pBrand": ["MAKUTE", "CROWN", "GENERIC"],
      "psize": ["STANDARD SIZE"],
      "pprice": [2002.00],
      "category": "Power Tools"
    },
    {
      "pname": "BUSH HAMMER",
      "pCode": "51120103032",
      "pBrand": ["VARIOUS BRANDS"],
      "psize": ["STANDARD SIZE"],
      "pprice": [220.00],
      "category": "Power Tools"
    },
    {
      "pname": "GASOLINE VIBRATOR",
      "pCode": "51120103033",
      "pBrand": ["DEWALT"],
      "psize": ["STANDARD SIZE"],
      "pprice": [1313.00],
      "category": "Power Tools"
    },
    {
      "pname": "CONCRETE VIBRATION LEVELING RULER",
      "pCode": "51120103034",
      "pBrand": ["MAKITA"],
      "psize": ["STANDARD SIZE"],
      "pprice": [3276.00],
      "category": "Power Tools"
    },
    {
      "pname": "HIGH PRESSURE WASHER",
      "pCode": "51120103035",
      "pBrand": ["ALTMAN"],
      "psize": ["STANDARD SIZE"],
      "pprice": [2145.00],
      "category": "Power Tools"
    },
    {
      "pname": "ELECTRIC SCREW DRIVER",
      "pCode": "51120103036",
      "pBrand": ["FORNEY"],
      "psize": ["STANDARD SIZE"],
      "pprice": [270.40],
      "category": "Power Tools"
    },
    {
      "pname": "FOAM PLATE CUTTING MACHINE",
      "pCode": "51120103037",
      "pBrand": ["BOSCH"],
      "psize": ["Table Size: 30.3 x 13 x 2.17 inches (77 x 33 x 5.5 cm)"],
      "pprice": [2050.00],
      "category": "Power Tools"
    },
    {
      "pname": "SPRAY GUN MACHINE",
      "pCode": "51120103038",
      "pBrand": ["PRIME-LINE"],
      "psize": ["Nozzle Sizes: 1.5mm, 1.8mm, 2.0mm, 2.5mm; Cup Capacities: 400ml, 600ml, 800ml, 1000ml"],
      "pprice": [88, 218.40],
      "category": "Power Tools"
    },
    {
      "pname": "AIR IMPACT MACHINE",
      "pCode": "51120103020",
      "pBrand": ["DEWALT", "BOSCH"],
      "psize": ["Drive Size: 1 inch; Torque: 1500 ft-lbs"],
      "pprice": [400.00],
      "category": "Power Tools"
    },
    {
      "pname": "ELECTRIC DRILL",
      "pCode": "51120103021",
      "pBrand": ["BOSCH"],
      "psize": ["Chuck Size: 1/2 inch; Power: Variable depending on model"],
      "pprice": [195.00],
      "category": "Power Tools"
    },
    {
      "pname": "ANGLE DRILL MACHINE",
      "pCode": "51120103022",
      "pBrand": ["MAKITA"],
      "psize": ["4.5\"", "9\""],
      "pprice": [330, 425],
      "category": "Power Tools"
    }
  ]


export { productCatagory,products}