const replacements = {
    "linear": "catchup",
    "https://bpprod1live.akamaized.net/bpk-tv/irdeto_com_Channel_387/output/manifest.mpd": "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_387/output/manifest.mpd",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_257/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=8",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_380/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=12",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_389/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=20",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=24",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_303/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=40",
    "https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_258/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=63",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_387/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=64",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=78",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_205/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=100",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_185/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=123",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_113/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=137",
    "https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_114/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=150",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_204/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=175",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_119/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=184",
    "https://delta13tatasky.akamaized.net/out/i/2285199.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=235",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=235",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_411/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=244",
    "https://delta10tatasky.akamaized.net/out/i/6574644.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=245",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_412/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=245",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_413/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=246",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_426/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=248",
    "https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_425/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=249",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_415/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=250",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_424/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=251",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_416/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=252",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_418/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=254",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_423/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=256",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_429/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=257",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_419/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=258",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_420/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=259",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_421/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=260",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_428/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=262",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_454/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=267",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_476/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=297",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_600/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=380",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_611/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=387",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_608/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=388",
    "https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_655/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=413",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_729/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=463",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_746/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=467",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_736/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=468",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_744/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=469",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_756/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=474",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_818/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=496",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_836/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=501",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_827/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=503",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_833/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=507",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_837/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=512",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_840/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=514",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_841/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=515",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_609/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=516",
    "https://bpprod3live.akamaized.net/bpk-tv/irdeto_com_Channel_760/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=521",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_834/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=522",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_583/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=537",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_767/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=540",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_122/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=551",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_182/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=557",
    "https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_196/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=578",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_838/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=580",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_831/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=583",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_709/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=597",
    "https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_652/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=605",
    "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_842/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=608",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_873/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=635",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_871/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=636",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_874/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=637",
    "https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_926/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=684",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_935/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=693",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_933/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=694",
    "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_917/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=675",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_955/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=727",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_988/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=796",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_989/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=797",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1000/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=810",
    "https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1111/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=814",
    "https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1960/output/manifest.mpd": "https://beta-ts-sable.vercel.app/index.mpd?id=1181"
    //"https://delta10tatasky.akamaized.net/out/i/6574644.mpd": "https://bpprod4linear.akamaized.net/bpk-tv/irdeto_com_Channel_412/output/manifest.mpd",
    //"https://delta13tatasky.akamaized.net/out/i/2285199.mpd": "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd",
    //"https://bpweb1.akamaized.net": "http://localhost:1337/bpweb1.akamaized.net",
    //"https://bpweb2.akamaized.net": "http://localhost:1337/bpweb2.akamaized.net",
    //"https://bpweb3.akamaized.net": "http://localhost:1337/bpweb3.akamaized.net",
    //"https://bpweb4.akamaized.net": "http://localhost:1337/bpweb4.akamaized.net",
    //"https://bpweb5.akamaized.net": "http://localhost:1337/bpweb5.akamaized.net",
    //"https://bpweb6.akamaized.net": "http://localhost:1337/bpweb6.akamaized.net",
    //"https://bpweb7.akamaized.net": "http://localhost:1337/bpweb7.akamaized.net",
};

export const replacestrings = (inputString) => {
    for (const [search, replace] of Object.entries(replacements)) {
        inputString = inputString.replace(new RegExp(search, 'g'), replace);
    }
    return inputString;
};