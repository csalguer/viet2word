export interface DictionaryEntry {
    id: string;
    word: string;
    pos: string;
    lang_code: string;
    etymology_text?: string;
    head_templates?: string;
    etymology_templates?: string;
    created_at: string;
    updated_at: string;
    senses: {
        id: string;
        word_id: string;
        glosses?: any[]; 
        tags?: any[];
        display_label?: string | null;
        examples?: any[];
        links?: any[];
    }[];
    sounds: {
        id: string;
        word_id: string;
        ipa?: string | null;
        audio_url?: string | null;
        ogg_url?: string | null;
        mp3_url?: string | null;
        tags?: any[];
    }[];
    forms?: any[];
}

export const mockData: DictionaryEntry[] = [
    {
        "id": "0c4759c5-7349-4adb-b3c3-202d3f31e08c",
        "word": "chân ướt chân ráo",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.940488",
        "updated_at": "2026-01-24T16:42:24.940508",
        "senses": [
            {
                "id": "c78ff654-1ce6-4b83-bfb6-693ac1b92946",
                "word_id": "0c4759c5-7349-4adb-b3c3-202d3f31e08c",
                "glosses": [
                    "simple and naive; amateurish; inexperienced; wet behind the ears"
                ],
                "tags": [
                    "figuratively"
                ],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "simple",
                        "simple"
                    ],
                    [
                        "naive",
                        "naive"
                    ],
                    [
                        "amateurish",
                        "amateurish"
                    ],
                    [
                        "inexperienced",
                        "inexperienced"
                    ],
                    [
                        "wet behind the ears",
                        "wet behind the ears"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "c9fd702a-4a18-4679-ad2d-f61f6445802d",
                "word_id": "0c4759c5-7349-4adb-b3c3-202d3f31e08c",
                "ipa": "[t͡ɕən˧˧ ʔɨət̚˧˦ t͡ɕən˧˧ zaːw˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "f84bb116-c848-45e4-835c-2718e4254868",
                "word_id": "0c4759c5-7349-4adb-b3c3-202d3f31e08c",
                "ipa": "[t͡ɕəŋ˧˧ ʔɨək̚˦˧˥ t͡ɕəŋ˧˧ ʐaːw˨˩˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "9f51d251-01ea-4381-9fb2-adf9339cc7f6",
                "word_id": "0c4759c5-7349-4adb-b3c3-202d3f31e08c",
                "ipa": "[cəŋ˧˧ ʔɨək̚˦˥ cəŋ˧˧ ɹaːw˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "18f483e8-f08e-4bd2-94c6-7be316aa0b60",
        "word": "特攻",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.940605",
        "updated_at": "2026-01-24T16:42:24.940610",
        "senses": [
            {
                "id": "e561fa8b-98d5-4944-9f0a-51e758e42f88",
                "word_id": "18f483e8-f08e-4bd2-94c6-7be316aa0b60",
                "glosses": [
                    "chữ Hán form of đặc công (“special forces”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "đặc công",
                        "đặc công#Vietnamese:_特攻"
                    ],
                    [
                        "special forces",
                        "special forces"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "da18a7e9-7eea-46a1-ab23-3c208d5fba6d",
        "word": "消滅",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.940667",
        "updated_at": "2026-01-24T16:42:24.940671",
        "senses": [
            {
                "id": "4a498de1-bb5c-4481-9481-4815cfa30aeb",
                "word_id": "da18a7e9-7eea-46a1-ab23-3c208d5fba6d",
                "glosses": [
                    "chữ Hán form of tiêu diệt (“to eliminate; to annihilate”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "tiêu diệt",
                        "tiêu diệt#Vietnamese:_消滅"
                    ],
                    [
                        "eliminate",
                        "eliminate"
                    ],
                    [
                        "annihilate",
                        "annihilate"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "ab4286dc-a7e5-492f-978b-2bf55c107a1c",
        "word": "gặt",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.940803",
        "updated_at": "2026-01-24T16:42:24.940806",
        "senses": [
            {
                "id": "24b8ba29-29ed-47ce-87b8-9e7263518073",
                "word_id": "ab4286dc-a7e5-492f-978b-2bf55c107a1c",
                "glosses": [
                    "to reap; to harvest"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "mùa gặt",
                        "bold_text_offsets": [
                            [
                                4,
                                7
                            ]
                        ],
                        "translation": "harvesting season; the harvest",
                        "english": "harvesting season; the harvest",
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "reap",
                        "reap"
                    ],
                    [
                        "harvest",
                        "harvest"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "940e075f-2138-4204-99f6-36d0abb0eab3",
                "word_id": "ab4286dc-a7e5-492f-978b-2bf55c107a1c",
                "ipa": "[ɣat̚˧˨ʔ]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "eeddd130-df93-4761-a8da-79a0eba38816",
                "word_id": "ab4286dc-a7e5-492f-978b-2bf55c107a1c",
                "ipa": "[ɣak̚˨˩ʔ]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "626982f0-59f5-4eb8-9b2f-36973c701027",
                "word_id": "ab4286dc-a7e5-492f-978b-2bf55c107a1c",
                "ipa": "[ɣak̚˨˩˨]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "8bd2175f-2e1a-4680-bd35-c1b51b1807e4",
        "word": "e hèm",
        "pos": "intj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945148",
        "updated_at": "2026-01-24T16:42:24.945164",
        "senses": [
            {
                "id": "257354f4-10a7-43fb-874f-90725a366b84",
                "word_id": "8bd2175f-2e1a-4680-bd35-c1b51b1807e4",
                "glosses": [
                    "ahem"
                ],
                "tags": [
                    "onomatopoeic"
                ],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "ahem",
                        "ahem#English"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "d756d77a-50b5-48ea-9614-9be9e0d87b94",
                "word_id": "8bd2175f-2e1a-4680-bd35-c1b51b1807e4",
                "ipa": "[ʔɛ˧˧ hɛm˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "ac87c911-d5d4-495c-9146-26e79f3ba42a",
                "word_id": "8bd2175f-2e1a-4680-bd35-c1b51b1807e4",
                "ipa": "[ʔɛ˧˧ hɛm˦˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "fb548963-003d-4087-8fab-7ef94617e79c",
                "word_id": "8bd2175f-2e1a-4680-bd35-c1b51b1807e4",
                "ipa": "[ʔɛ˧˧ hɛm˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "0477f1ef-afb2-461b-aed7-3490ba952ac5",
        "word": "麂",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945224",
        "updated_at": "2026-01-24T16:42:24.945227",
        "senses": [
            {
                "id": "7fd3d5ea-07ee-4138-b576-1cd10f51b034",
                "word_id": "0477f1ef-afb2-461b-aed7-3490ba952ac5",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "aee353b5-7889-40a5-afe9-bd0990feeb44",
        "word": "A",
        "pos": "intj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945276",
        "updated_at": "2026-01-24T16:42:24.945278",
        "senses": [
            {
                "id": "4e64fe6c-9895-44fc-8155-bf381ac22901",
                "word_id": "aee353b5-7889-40a5-afe9-bd0990feeb44",
                "glosses": [
                    "hah!"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "hah",
                        "hah"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "5f16c55c-b357-4f3e-908a-16230a28d8f8",
                "word_id": "aee353b5-7889-40a5-afe9-bd0990feeb44",
                "ipa": "[ʔaː˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "41527e1d-f70c-47d1-9a1f-d66fe70124e8",
                "word_id": "aee353b5-7889-40a5-afe9-bd0990feeb44",
                "ipa": "[ʔaː˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "464f3307-6117-44b1-ae43-962cb140fc19",
                "word_id": "aee353b5-7889-40a5-afe9-bd0990feeb44",
                "ipa": "[ʔaː˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "2cfb137d-555a-4365-b75d-12ed5bf81e9e",
                "word_id": "aee353b5-7889-40a5-afe9-bd0990feeb44",
                "ipa": null,
                "audio_url": "Vi ngang tone.ogg",
                "ogg_url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Vi_ngang_tone.ogg",
                "mp3_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7b/Vi_ngang_tone.ogg/Vi_ngang_tone.ogg.mp3",
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "c97a6caa-a932-4184-b822-e4eba38a1427",
        "word": "cái",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945454",
        "updated_at": "2026-01-24T16:42:24.945456",
        "senses": [
            {
                "id": "3fb87cbd-5c4f-4dca-bf2b-289752f24f26",
                "word_id": "c97a6caa-a932-4184-b822-e4eba38a1427",
                "glosses": [
                    "female"
                ],
                "tags": [
                    "feminine"
                ],
                "display_label": null,
                "examples": [
                    {
                        "text": "hoa cái",
                        "bold_text_offsets": [
                            [
                                4,
                                7
                            ]
                        ],
                        "translation": "carpellate flower; female flower",
                        "english": "carpellate flower; female flower",
                        "bold_translation_offsets": [
                            [
                                19,
                                25
                            ]
                        ],
                        "type": "example"
                    },
                    {
                        "text": "nhị cái",
                        "bold_text_offsets": [
                            [
                                4,
                                7
                            ]
                        ],
                        "translation": "a pistil",
                        "english": "a pistil",
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "female",
                        "female"
                    ]
                ]
            },
            {
                "id": "7fd40072-5b02-43e0-9a22-256cf11cd185",
                "word_id": "c97a6caa-a932-4184-b822-e4eba38a1427",
                "glosses": [
                    "big, large, main"
                ],
                "tags": [
                    "in-compounds"
                ],
                "display_label": null,
                "examples": [
                    {
                        "text": "sông cái",
                        "bold_text_offsets": [
                            [
                                5,
                                8
                            ]
                        ],
                        "translation": "the big river",
                        "english": "the big river",
                        "bold_translation_offsets": [
                            [
                                4,
                                7
                            ]
                        ],
                        "type": "example"
                    },
                    {
                        "text": "ngón chân cái",
                        "bold_text_offsets": [
                            [
                                10,
                                13
                            ]
                        ],
                        "translation": "the big toe",
                        "english": "the big toe",
                        "bold_translation_offsets": [
                            [
                                4,
                                7
                            ]
                        ],
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "big",
                        "big"
                    ],
                    [
                        "large",
                        "large"
                    ],
                    [
                        "main",
                        "main"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "1f83b6ca-10e3-48e9-9eed-7d469f0371d9",
                "word_id": "c97a6caa-a932-4184-b822-e4eba38a1427",
                "ipa": "[kaːj˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "35be5069-8180-47c8-8bda-d3a7cb15e870",
                "word_id": "c97a6caa-a932-4184-b822-e4eba38a1427",
                "ipa": "[kaːj˨˩˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "f0cfb3ec-379e-4182-841b-016c7346ea14",
                "word_id": "c97a6caa-a932-4184-b822-e4eba38a1427",
                "ipa": "[kaːj˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "98c38b6c-86b3-4777-9598-6dad8d1f3d57",
                "word_id": "c97a6caa-a932-4184-b822-e4eba38a1427",
                "ipa": null,
                "audio_url": "LL-Q9199 (vie)-Penn Zero MSSJ-cái.wav",
                "ogg_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d8/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C3%A1i.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C3%A1i.wav.ogg",
                "mp3_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d8/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C3%A1i.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C3%A1i.wav.mp3",
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "e7f384f2-9ce2-4128-a011-ad19d37fff69",
        "word": "xe tăng",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945552",
        "updated_at": "2026-01-24T16:42:24.945554",
        "senses": [
            {
                "id": "db51e30e-3888-47fc-9bdc-c6c70dd69836",
                "word_id": "e7f384f2-9ce2-4128-a011-ad19d37fff69",
                "glosses": [
                    "a tank (military vehicle)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "Từ điển bách khoa Britannica (Anh) ghi nhận trận đánh ở Kursk (miền Tây Liên Xô) từ ngày 5-7 đến [2]3-7-1943 là trận giao chiến xe tăng lớn nhất lịch sử với khoảng 6.000 xe tăng, 2 triệu binh sĩ, 4.000 máy bay của Liên Xô và phát xít Đức tham chiến.",
                        "ref": "2022, Hoàng Duy Long, “Xe tăng - lịch sử đổi thay - Kỳ 2: Trận đại chiến máu lửa xe tăng ở chiến địa Kursk [Tanks - History of Changes – Part 2: The Great Bloody and Fiery Tank Battle at Kursk]”, in Tuổi Trẻ Online:",
                        "english": "Encyclopædia Britannica records that the Battle of Kursk (in western Soviet Union) from 5 July to 23 July 1943 was the largest tank battle in history with about 6,000 tanks, 2,000,000 troops, and 4,000 aircraft – from both the Soviet Union and Nazi Germany – participating.",
                        "type": "quote",
                        "translation": "Encyclopædia Britannica records that the Battle of Kursk (in western Soviet Union) from 5 July to 23 July 1943 was the largest tank battle in history with about 6,000 tanks, 2,000,000 troops, and 4,000 aircraft – from both the Soviet Union and Nazi Germany – participating.",
                        "bold_text_offsets": [
                            [
                                128,
                                135
                            ],
                            [
                                170,
                                177
                            ]
                        ],
                        "bold_translation_offsets": [
                            [
                                127,
                                131
                            ],
                            [
                                167,
                                171
                            ],
                            [
                                167,
                                172
                            ]
                        ]
                    }
                ],
                "links": [
                    [
                        "tank",
                        "tank"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "0f074fc9-0b71-4ab5-a9b9-2fc9a9ad1feb",
                "word_id": "e7f384f2-9ce2-4128-a011-ad19d37fff69",
                "ipa": "[sɛ˧˧ taŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "f3af52b0-92cc-4ade-8eda-1438e9b66390",
                "word_id": "e7f384f2-9ce2-4128-a011-ad19d37fff69",
                "ipa": "[sɛ˧˧ taŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "00f6b2a9-d4a1-4a2e-8ee5-5841cf15059d",
                "word_id": "e7f384f2-9ce2-4128-a011-ad19d37fff69",
                "ipa": "[sɛ˧˧ taŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "a85c26f3-b4f5-4824-a030-37a3ecc7922b",
        "word": "phát thanh viên",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945607",
        "updated_at": "2026-01-24T16:42:24.945608",
        "senses": [
            {
                "id": "2a85b792-5792-433e-9649-cc088160f46a",
                "word_id": "a85c26f3-b4f5-4824-a030-37a3ecc7922b",
                "glosses": [
                    "a radio broadcaster"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "radio",
                        "radio"
                    ],
                    [
                        "broadcaster",
                        "broadcaster"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "c3544740-e437-4939-9550-63e9c5cba043",
                "word_id": "a85c26f3-b4f5-4824-a030-37a3ecc7922b",
                "ipa": "[faːt̚˧˦ tʰajŋ̟˧˧ viən˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "2d7f151c-c3d6-4c75-bddf-ab119dcc7375",
                "word_id": "a85c26f3-b4f5-4824-a030-37a3ecc7922b",
                "ipa": "[faːk̚˦˧˥ tʰɛɲ˧˧ viəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "7c99303a-d90a-4f27-af5e-13a82ee89758",
                "word_id": "a85c26f3-b4f5-4824-a030-37a3ecc7922b",
                "ipa": "[faːk̚˦˥ tʰan˧˧ viəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "47ed3131-0e7f-4159-b131-4ea7c1ae93cd",
                "word_id": "a85c26f3-b4f5-4824-a030-37a3ecc7922b",
                "ipa": "[faːk̚˦˥ tʰan˧˧ jiəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "06e7d468-b805-4832-adcb-6eb2c24a8b96",
        "word": "泔",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945629",
        "updated_at": "2026-01-24T16:42:24.945630",
        "senses": [
            {
                "id": "b3bf1edd-2109-47b8-8268-1d6cc46dfa5e",
                "word_id": "06e7d468-b805-4832-adcb-6eb2c24a8b96",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "5f05101c-44b0-4546-88ea-6aeb0c659050",
        "word": "敵情",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945693",
        "updated_at": "2026-01-24T16:42:24.945695",
        "senses": [
            {
                "id": "d292e39f-254d-4a5d-bc83-51cfbf3850e6",
                "word_id": "5f05101c-44b0-4546-88ea-6aeb0c659050",
                "glosses": [
                    "chữ Hán form of địch tình"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "địch tình",
                        "địch tình#Vietnamese:_敵情"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "88fed9b1-357d-4a0c-8e0d-27c43a763204",
        "word": "現象",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945725",
        "updated_at": "2026-01-24T16:42:24.945727",
        "senses": [
            {
                "id": "02f8bf4f-ec73-459a-9e84-dea5df6bf059",
                "word_id": "88fed9b1-357d-4a0c-8e0d-27c43a763204",
                "glosses": [
                    "chữ Hán form of hiện tượng (“phenomenon”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "hiện tượng",
                        "hiện tượng#Vietnamese:_現象"
                    ],
                    [
                        "phenomenon",
                        "phenomenon"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "01aa61bd-e362-4449-9a8b-be2f220f8d96",
        "word": "高句麗",
        "pos": "name",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945769",
        "updated_at": "2026-01-24T16:42:24.945772",
        "senses": [
            {
                "id": "edcb85e9-72de-4a9d-875f-a6c926cfce03",
                "word_id": "01aa61bd-e362-4449-9a8b-be2f220f8d96",
                "glosses": [
                    "chữ Hán form of Cao Câu Li: (historical) Goguryeo (an ancient kingdom in modern Korea, one of the Three Kingdoms, existing from 37 BCE to 668 CE; at its maximum covering all of North Korea, the northern part of South Korea, parts of Manchuria in northeast China, and parts of Primorsky Krai in Russia)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "Cao Câu Li",
                        "Cao Câu Li#Vietnamese:_高句麗"
                    ],
                    [
                        "Goguryeo",
                        "Goguryeo#English:_Q28370"
                    ],
                    [
                        "ancient",
                        "ancient"
                    ],
                    [
                        "kingdom",
                        "kingdom"
                    ],
                    [
                        "Korea",
                        "Korea#English"
                    ],
                    [
                        "North Korea",
                        "North Korea#English"
                    ],
                    [
                        "South Korea",
                        "South Korea#English"
                    ],
                    [
                        "Manchuria",
                        "Manchuria"
                    ],
                    [
                        "China",
                        "China#English"
                    ],
                    [
                        "Primorsky Krai",
                        "Primorsky Krai"
                    ],
                    [
                        "Russia",
                        "Russia#English"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "aacf2572-b60c-47e4-ab0a-0531cc8ee18f",
        "word": "làm tròn",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945856",
        "updated_at": "2026-01-24T16:42:24.945858",
        "senses": [
            {
                "id": "d597ca63-64f8-4233-9a0c-8f7d8269236d",
                "word_id": "aacf2572-b60c-47e4-ab0a-0531cc8ee18f",
                "glosses": [
                    "to round"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "number",
                        "number"
                    ],
                    [
                        "round",
                        "round"
                    ]
                ]
            },
            {
                "id": "b711909f-3575-4051-acae-30edd66e51f4",
                "word_id": "aacf2572-b60c-47e4-ab0a-0531cc8ee18f",
                "glosses": [
                    "to fulfill one's duties or responsibilities"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "fulfill",
                        "fulfill"
                    ],
                    [
                        "duties",
                        "duty"
                    ],
                    [
                        "responsibilities",
                        "responsibility"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "f0b5b644-c8f7-47e1-915c-246ba6c8d1be",
                "word_id": "aacf2572-b60c-47e4-ab0a-0531cc8ee18f",
                "ipa": "[laːm˨˩ t͡ɕɔn˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "d5510546-2f39-4e3a-8a6d-64d5300367e5",
                "word_id": "aacf2572-b60c-47e4-ab0a-0531cc8ee18f",
                "ipa": "[laːm˦˩ ʈɔŋ˦˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "40465ffa-e35a-4792-a98d-008f708a3537",
                "word_id": "aacf2572-b60c-47e4-ab0a-0531cc8ee18f",
                "ipa": "[laːm˨˩ ʈɔŋ˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "a73319c3-ee36-49d9-9022-052c2c9e1246",
        "word": "鋥",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945901",
        "updated_at": "2026-01-24T16:42:24.945902",
        "senses": [
            {
                "id": "624e9d1a-db32-49fa-80f4-ff8d1e7c541a",
                "word_id": "a73319c3-ee36-49d9-9022-052c2c9e1246",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "f9488dc5-c381-4447-a19c-b830655f4088",
        "word": "đa phương",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.945950",
        "updated_at": "2026-01-24T16:42:24.945952",
        "senses": [
            {
                "id": "b625d928-4add-487e-a675-be5f64d4e4d7",
                "word_id": "f9488dc5-c381-4447-a19c-b830655f4088",
                "glosses": [
                    "multilateral; multipartite"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "hợp tác kinh tế đa phương",
                        "bold_text_offsets": [
                            [
                                16,
                                25
                            ]
                        ],
                        "translation": "multilateral economic cooperation",
                        "english": "multilateral economic cooperation",
                        "bold_translation_offsets": [
                            [
                                0,
                                12
                            ]
                        ],
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "multilateral",
                        "multilateral"
                    ],
                    [
                        "multipartite",
                        "multipartite"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "059a20b6-5536-4348-8ebe-c4fe0cae1532",
                "word_id": "f9488dc5-c381-4447-a19c-b830655f4088",
                "ipa": "[ʔɗaː˧˧ fɨəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "8fde93f6-a91e-44fd-b7f7-1838793986cd",
                "word_id": "f9488dc5-c381-4447-a19c-b830655f4088",
                "ipa": "[ʔɗaː˧˧ fɨəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "7c60ce7d-86dd-415a-ba34-406afe1dc3fa",
                "word_id": "f9488dc5-c381-4447-a19c-b830655f4088",
                "ipa": "[ʔɗaː˧˧ fɨəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "7d4b0f52-39cd-445c-8779-e9edd3a4e7eb",
        "word": "tứ thiết",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946021",
        "updated_at": "2026-01-24T16:42:24.946022",
        "senses": [
            {
                "id": "cfddbdc5-a98c-4e40-9b71-83e04dec2a5c",
                "word_id": "7d4b0f52-39cd-445c-8779-e9edd3a4e7eb",
                "glosses": [
                    "four traditional fine types of timber native to Vietnam: đinh, lim, sến, táu"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "traditional",
                        "traditional"
                    ],
                    [
                        "fine",
                        "fine"
                    ],
                    [
                        "timber",
                        "timber"
                    ],
                    [
                        "Vietnam",
                        "Vietnam"
                    ],
                    [
                        "đinh",
                        "đinh#Vietnamese"
                    ],
                    [
                        "lim",
                        "lim#Vietnamese"
                    ],
                    [
                        "sến",
                        "sến#Vietnamese"
                    ],
                    [
                        "táu",
                        "táu#Vietnamese"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "58e17b06-297a-46ae-b8e2-fe525b9305c5",
                "word_id": "7d4b0f52-39cd-445c-8779-e9edd3a4e7eb",
                "ipa": "[tɨ˧˦ tʰiət̚˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "618db3b8-016c-4b75-b0b4-be7c97bab133",
                "word_id": "7d4b0f52-39cd-445c-8779-e9edd3a4e7eb",
                "ipa": "[tɨ˨˩˦ tʰiək̚˦˧˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "c3ae7679-5323-4fea-bc0c-4185e9ca8c55",
                "word_id": "7d4b0f52-39cd-445c-8779-e9edd3a4e7eb",
                "ipa": "[tɨ˦˥ tʰiək̚˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "82b85709-b448-4bd5-88b8-95b64c6ee6c1",
        "word": "駡",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946061",
        "updated_at": "2026-01-24T16:42:24.946063",
        "senses": [
            {
                "id": "ddf9598d-f29b-4afd-b5d8-c950dc174b4c",
                "word_id": "82b85709-b448-4bd5-88b8-95b64c6ee6c1",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "ec64aefc-612e-421f-93c2-8b156a7f80d3",
        "word": "榷",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946081",
        "updated_at": "2026-01-24T16:42:24.946082",
        "senses": [
            {
                "id": "0fb5d9cf-6530-4895-ba59-b4df92f06b69",
                "word_id": "ec64aefc-612e-421f-93c2-8b156a7f80d3",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
        "word": "Thuỷ tinh",
        "pos": "name",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946153",
        "updated_at": "2026-01-24T16:42:24.946154",
        "senses": [
            {
                "id": "34546b41-f877-49ce-8f46-6351f287c02f",
                "word_id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
                "glosses": [
                    "Mercury (planet)"
                ],
                "tags": [
                    "formal",
                    "rare"
                ],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "Mercury",
                        "Mercury"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "0bbc49d9-3df0-479b-8b16-f142a73e3f0a",
                "word_id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
                "ipa": "[tʰwi˧˩ tïŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "81b4e0b5-d280-4313-9dfa-e18d719feb4b",
                "word_id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
                "ipa": "[tʰwɪj˧˨ tɨn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "9b8fc4c4-04fa-47dc-9bf5-2a2463cef953",
                "word_id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
                "ipa": "[tʰ⁽ʷ⁾ɪj˨˩˦ tɨn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "42925a70-fe58-4ab5-814a-154c564a0675",
                "word_id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
                "ipa": null,
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "f34295a2-5434-4d71-93de-75526d291567",
                "word_id": "b2dddd1a-5393-4641-b01d-b826ba3fa96a",
                "ipa": null,
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "0b6ef7c3-2928-46db-a730-5ec681ff0c9a",
        "word": "ranh con",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946197",
        "updated_at": "2026-01-24T16:42:24.946198",
        "senses": [
            {
                "id": "34f8d66f-c375-474c-bffe-432bf027e75f",
                "word_id": "0b6ef7c3-2928-46db-a730-5ec681ff0c9a",
                "glosses": [
                    "mischievous child; little devil; scamp; whelp; rascal"
                ],
                "tags": [
                    "colloquial",
                    "often"
                ],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "mischievous",
                        "mischievous"
                    ],
                    [
                        "child",
                        "child"
                    ],
                    [
                        "little",
                        "little"
                    ],
                    [
                        "devil",
                        "devil"
                    ],
                    [
                        "scamp",
                        "scamp"
                    ],
                    [
                        "whelp",
                        "whelp"
                    ],
                    [
                        "rascal",
                        "rascal"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "d84e902d-f6fa-4de9-b7d6-e5234a74e601",
                "word_id": "0b6ef7c3-2928-46db-a730-5ec681ff0c9a",
                "ipa": "[zajŋ̟˧˧ kɔn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "f6095234-f1b9-414b-b23d-6b940dfd4350",
                "word_id": "0b6ef7c3-2928-46db-a730-5ec681ff0c9a",
                "ipa": "[ʐɛɲ˧˧ kɔŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "dcba9abf-2f59-4ccd-b538-9166d7bca650",
                "word_id": "0b6ef7c3-2928-46db-a730-5ec681ff0c9a",
                "ipa": "[ɹan˧˧ kɔŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "40e08cca-2d07-4742-af4c-0c72e0d21739",
        "word": "絕對",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946221",
        "updated_at": "2026-01-24T16:42:24.946222",
        "senses": [
            {
                "id": "0427f451-f6a9-44bc-8c05-ba8b08563402",
                "word_id": "40e08cca-2d07-4742-af4c-0c72e0d21739",
                "glosses": [
                    "chữ Hán form of tuyệt đối (“absolute”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "tuyệt đối",
                        "tuyệt đối#Vietnamese:_絕對"
                    ],
                    [
                        "absolute",
                        "absolute"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "5e6cdb75-84c7-48de-81cb-291647bc79a4",
        "word": "tàu ngầm",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946260",
        "updated_at": "2026-01-24T16:42:24.946262",
        "senses": [
            {
                "id": "61334763-d68b-419b-8747-e2dd196c61ae",
                "word_id": "5e6cdb75-84c7-48de-81cb-291647bc79a4",
                "glosses": [
                    "submarine"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "submarine",
                        "submarine"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "066e5c75-59b6-419d-9a70-6e4d877741cf",
                "word_id": "5e6cdb75-84c7-48de-81cb-291647bc79a4",
                "ipa": "[taw˨˩ ŋəm˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "453c3ba0-950a-4b20-840a-7f5c9f236af0",
                "word_id": "5e6cdb75-84c7-48de-81cb-291647bc79a4",
                "ipa": "[taw˦˩ ŋəm˦˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "2da4ea09-7c73-4f5f-ab8d-30f8b5f1a6f2",
                "word_id": "5e6cdb75-84c7-48de-81cb-291647bc79a4",
                "ipa": "[ta(ː)w˨˩ ŋəm˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
        "word": "ngày sinh",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946335",
        "updated_at": "2026-01-24T16:42:24.946337",
        "senses": [
            {
                "id": "ea737a17-2404-4780-b320-4fe9cbe2b656",
                "word_id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
                "glosses": [
                    "date of birth, birthdate"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "date of birth",
                        "date of birth"
                    ],
                    [
                        "birthdate",
                        "birthdate"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "d23a4e1c-66e2-47bd-a8b5-8167a12bb73d",
                "word_id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
                "ipa": "[ŋaj˨˩ sïŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "eb3d55b8-8e14-4996-b1d7-fdc5f6375298",
                "word_id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
                "ipa": "[ŋaj˦˩ ʂɨn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "c69b50ae-7ce4-483e-bb5f-f4b041ded287",
                "word_id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
                "ipa": "[ŋaj˦˩ sɨn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "4c49f7ea-65a9-43ae-a43f-549484701237",
                "word_id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
                "ipa": "[ŋa(ː)j˨˩ ʂɨn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "37ace6c3-5e4d-4e7d-9034-61f73eec0f5a",
                "word_id": "d808aa4e-d353-465c-9b6e-2b95dc2c240a",
                "ipa": "[ŋa(ː)j˨˩ sɨn˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "5aa71242-b6a9-4788-a6be-875e3acb0907",
        "word": "thấu đáo",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946383",
        "updated_at": "2026-01-24T16:42:24.946385",
        "senses": [
            {
                "id": "9ec4a822-b67c-4500-9d85-ed6c31382787",
                "word_id": "5aa71242-b6a9-4788-a6be-875e3acb0907",
                "glosses": [
                    "thorough"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "understand",
                        "understand"
                    ],
                    [
                        "thorough",
                        "thorough"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "01388141-3269-434d-b57f-d5000b17ec1e",
                "word_id": "5aa71242-b6a9-4788-a6be-875e3acb0907",
                "ipa": "[tʰəw˧˦ ʔɗaːw˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "6e461c28-9126-4b67-ba7b-96cc574264b0",
                "word_id": "5aa71242-b6a9-4788-a6be-875e3acb0907",
                "ipa": "[tʰəw˨˩˦ ʔɗaːw˨˩˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "fd3e090c-58de-4e31-bd74-7480403fdae2",
                "word_id": "5aa71242-b6a9-4788-a6be-875e3acb0907",
                "ipa": "[tʰəw˦˥ ʔɗaːw˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "93d724bb-1916-4af0-9e6a-39dd2597ee36",
        "word": "㷝",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946441",
        "updated_at": "2026-01-24T16:42:24.946442",
        "senses": [
            {
                "id": "76fb4c0b-7771-4a81-a2ff-7e8ac8af32cc",
                "word_id": "93d724bb-1916-4af0-9e6a-39dd2597ee36",
                "glosses": [
                    "chữ Nôm form of đốt (“to set fire to”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Nôm",
                        "chữ Nôm#Vietnamese"
                    ],
                    [
                        "đốt",
                        "đốt#Vietnamese"
                    ],
                    [
                        "set fire",
                        "set fire"
                    ]
                ]
            },
            {
                "id": "d19c847b-6c28-4dcf-8578-ddf294913cdb",
                "word_id": "93d724bb-1916-4af0-9e6a-39dd2597ee36",
                "glosses": [
                    "chữ Nôm form of đốt (“to sting”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Nôm",
                        "chữ Nôm#Vietnamese"
                    ],
                    [
                        "đốt",
                        "đốt#Vietnamese"
                    ],
                    [
                        "sting",
                        "sting"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "e6c5ea8d-c196-4a47-92cc-97cd608fdb43",
        "word": "根腳",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946490",
        "updated_at": "2026-01-24T16:42:24.946491",
        "senses": [
            {
                "id": "1c2ac883-4be2-4a9e-9751-bff7083ac3aa",
                "word_id": "e6c5ea8d-c196-4a47-92cc-97cd608fdb43",
                "glosses": [
                    "chữ Hán form of căn cước (“identity”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "căn cước",
                        "căn cước#Vietnamese:_根腳"
                    ],
                    [
                        "identity",
                        "identity"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "2e188ef2-36e4-4a2f-a460-ca30b987864b",
        "word": "溶",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946511",
        "updated_at": "2026-01-24T16:42:24.946513",
        "senses": [
            {
                "id": "5591805a-ef10-4c76-ad2a-54a83e7844d7",
                "word_id": "2e188ef2-36e4-4a2f-a460-ca30b987864b",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "34492c78-8073-434e-a48b-52e83fe93ba1",
        "word": "Nê-an-đec-tan",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946540",
        "updated_at": "2026-01-24T16:42:24.946541",
        "senses": [
            {
                "id": "26170219-2778-4bd9-ae80-5bc911fc42c8",
                "word_id": "34492c78-8073-434e-a48b-52e83fe93ba1",
                "glosses": [
                    "alternative form of Nê-an-đéc-tan"
                ],
                "tags": [
                    "alt-of",
                    "alternative"
                ],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "Nê-an-đéc-tan",
                        "Nê-an-đéc-tan#Vietnamese"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
        "word": "quốc gia",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946620",
        "updated_at": "2026-01-24T16:42:24.946621",
        "senses": [
            {
                "id": "b5b159b6-c04c-40be-9f27-1365e17c011d",
                "word_id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
                "glosses": [
                    "state, nation, country"
                ],
                "tags": [
                    "formal",
                    "usually"
                ],
                "display_label": null,
                "examples": [
                    {
                        "text": "quốc gia có chủ quyền",
                        "bold_text_offsets": [
                            [
                                0,
                                8
                            ]
                        ],
                        "translation": "sovereign state",
                        "english": "sovereign state",
                        "type": "example"
                    },
                    {
                        "text": "quốc gia xuất xứ",
                        "bold_text_offsets": [
                            [
                                0,
                                8
                            ]
                        ],
                        "translation": "country of origin",
                        "english": "country of origin",
                        "bold_translation_offsets": [
                            [
                                0,
                                7
                            ]
                        ],
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "state",
                        "state"
                    ],
                    [
                        "nation",
                        "nation"
                    ],
                    [
                        "country",
                        "country"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "7e2ca434-1be3-4d08-928c-e2b974a85ba3",
                "word_id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
                "ipa": "[kuək̚˧˦ zaː˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "5bcd2779-9b6a-4284-ac0d-3aff8f1fd9b2",
                "word_id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
                "ipa": "[kuək̚˦˧˥ jaː˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "e3d3f5b2-a4fd-4b61-a2ec-ec4585e5baf4",
                "word_id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
                "ipa": "[wək̚˦˥ jaː˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "ca4b2f25-1482-4e29-8d6b-39269a7cb2e3",
                "word_id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
                "ipa": null,
                "audio_url": "LL-Q9199 (vie)-Penn Zero MSSJ-quốc gia.wav",
                "ogg_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bf/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-qu%E1%BB%91c_gia.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-qu%E1%BB%91c_gia.wav.ogg",
                "mp3_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bf/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-qu%E1%BB%91c_gia.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-qu%E1%BB%91c_gia.wav.mp3",
                "tags": []
            },
            {
                "id": "0d250691-539e-40dd-97e0-f4fbe103a400",
                "word_id": "bf4f092e-b7a3-41e7-b90d-d8f3f23fbeba",
                "ipa": null,
                "audio_url": "LL-Q9199 (vie)-Jessica Nguyen (Pamputt)-quốc gia.wav",
                "ogg_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ca/LL-Q9199_%28vie%29-Jessica_Nguyen_%28Pamputt%29-qu%E1%BB%91c_gia.wav/LL-Q9199_%28vie%29-Jessica_Nguyen_%28Pamputt%29-qu%E1%BB%91c_gia.wav.ogg",
                "mp3_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ca/LL-Q9199_%28vie%29-Jessica_Nguyen_%28Pamputt%29-qu%E1%BB%91c_gia.wav/LL-Q9199_%28vie%29-Jessica_Nguyen_%28Pamputt%29-qu%E1%BB%91c_gia.wav.mp3",
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "31e424f4-5418-45f8-a223-3a10ac64ee48",
        "word": "thêu thùa",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946691",
        "updated_at": "2026-01-24T16:42:24.946694",
        "senses": [
            {
                "id": "31ae92fe-a02d-401b-a6b9-cd11e5dd5707",
                "word_id": "31e424f4-5418-45f8-a223-3a10ac64ee48",
                "glosses": [
                    "to embroider (generally speaking)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "Em luôn vui, em hiền lành,\nKhông hay đi chơi, nấu ăn ngon;\nEm may, em thêu thùa này,\nYêu thương ai yêu hết lòng này.",
                        "ref": "2018, “Bùa yêu”, performed by Bích Phương:",
                        "english": "I'm gentle, I'm jolly,\nI love being home, and I cook so well;\nI'm good at sewing and embroidery,\nAnd I will love you faithfully.",
                        "type": "quote",
                        "bold_text_offsets": [
                            [
                                70,
                                79
                            ]
                        ],
                        "translation": "I'm gentle, I'm jolly,\nI love being home, and I cook so well;\nI'm good at sewing and embroidery,\nAnd I will love you faithfully.",
                        "bold_translation_offsets": [
                            [
                                85,
                                95
                            ]
                        ]
                    }
                ],
                "links": [
                    [
                        "embroider",
                        "embroider"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "e13458c1-8651-43ce-a145-6ab5746e3322",
                "word_id": "31e424f4-5418-45f8-a223-3a10ac64ee48",
                "ipa": "[tʰew˧˧ tʰuə˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "0d907d57-d053-4511-8e0f-99261dc6592f",
                "word_id": "31e424f4-5418-45f8-a223-3a10ac64ee48",
                "ipa": "[tʰew˧˧ tʰuə˦˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "fd6cde87-86f7-4409-9409-f459ba77768a",
                "word_id": "31e424f4-5418-45f8-a223-3a10ac64ee48",
                "ipa": "[tʰew˧˧ tʰuə˨˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "0869ef3a-cbc0-4a1c-8f8c-1c1f5517ef10",
        "word": "đô",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946753",
        "updated_at": "2026-01-24T16:42:24.946756",
        "senses": [
            {
                "id": "264ffecd-1523-43e2-9032-8e7c6c4ba4c7",
                "word_id": "0869ef3a-cbc0-4a1c-8f8c-1c1f5517ef10",
                "glosses": [
                    "do"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "music",
                        "music"
                    ],
                    [
                        "do",
                        "do"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "598f1cca-93fd-4f33-a166-75f67a3a07d5",
                "word_id": "0869ef3a-cbc0-4a1c-8f8c-1c1f5517ef10",
                "ipa": "[ʔɗo˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "ae25710c-a95e-479f-9e6a-e91f3a65a226",
                "word_id": "0869ef3a-cbc0-4a1c-8f8c-1c1f5517ef10",
                "ipa": "[ʔɗow˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "70c25438-4eaf-4f84-9fdc-cbc7bc4882fb",
                "word_id": "0869ef3a-cbc0-4a1c-8f8c-1c1f5517ef10",
                "ipa": "[ʔɗow˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "6011fdf2-e626-4d29-9963-58be4cc6a631",
        "word": "冰",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946825",
        "updated_at": "2026-01-24T16:42:24.946828",
        "senses": [
            {
                "id": "a8407a13-8308-4479-9e3f-2c54690e6eda",
                "word_id": "6011fdf2-e626-4d29-9963-58be4cc6a631",
                "glosses": [
                    "chữ Hán form of băng (“ice”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "băng",
                        "băng#Vietnamese:_冰"
                    ],
                    [
                        "ice",
                        "ice"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "5e9b6642-476b-4e24-8e34-8a53891fe935",
        "word": "Biển Chết",
        "pos": "name",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946916",
        "updated_at": "2026-01-24T16:42:24.946919",
        "senses": [
            {
                "id": "fd77c606-ba4e-4a9d-9a9b-8f4c6c7391ee",
                "word_id": "5e9b6642-476b-4e24-8e34-8a53891fe935",
                "glosses": [
                    "Dead Sea (a highly saline lake in Israel, Palestine and Jordan)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "Dead Sea",
                        "Dead Sea#English"
                    ],
                    [
                        "lake",
                        "lake"
                    ],
                    [
                        "Israel",
                        "Israel#English"
                    ],
                    [
                        "Palestine",
                        "Palestine#English"
                    ],
                    [
                        "Jordan",
                        "Jordan#English"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "a56b906d-11b1-434a-ab4d-ce32daf384ef",
                "word_id": "5e9b6642-476b-4e24-8e34-8a53891fe935",
                "ipa": "[ʔɓiən˧˩ t͡ɕet̚˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "07637ba6-750d-464f-a9d3-e3d1bfe27ad5",
                "word_id": "5e9b6642-476b-4e24-8e34-8a53891fe935",
                "ipa": "[ʔɓiəŋ˧˨ t͡ɕet̚˦˧˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "37a009b0-4020-4cfe-a176-db73b69342ba",
                "word_id": "5e9b6642-476b-4e24-8e34-8a53891fe935",
                "ipa": "[ʔɓiəŋ˨˩˦ cəːt̚˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "b30bc8d0-4d8c-4ee2-a1ee-8dc0c2ebe4bd",
        "word": "渾",
        "pos": "character",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.946947",
        "updated_at": "2026-01-24T16:42:24.946949",
        "senses": [
            {
                "id": "8a9e89eb-ebda-46c0-a641-f8c781c3bef1",
                "word_id": "b30bc8d0-4d8c-4ee2-a1ee-8dc0c2ebe4bd",
                "glosses": [],
                "tags": [
                    "no-gloss"
                ],
                "display_label": null,
                "examples": [],
                "links": []
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "eef9127d-4eae-4804-a3de-d67303b0e5fd",
        "word": "ủ rũ",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947009",
        "updated_at": "2026-01-24T16:42:24.947011",
        "senses": [
            {
                "id": "b76179fd-9375-4799-a131-35f7205da313",
                "word_id": "eef9127d-4eae-4804-a3de-d67303b0e5fd",
                "glosses": [
                    "sullen; gloomy; melancholy"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "Trông cô nàng thật ủ rũ làm sao khi bị chàng từ chối",
                        "translation": "Look how blue she must be when being turned down like that.",
                        "english": "Look how blue she must be when being turned down like that.",
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "sullen",
                        "sullen"
                    ],
                    [
                        "gloomy",
                        "gloomy"
                    ],
                    [
                        "melancholy",
                        "melancholy"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "a53dd2a7-e813-4bff-8b51-c5835755d615",
                "word_id": "eef9127d-4eae-4804-a3de-d67303b0e5fd",
                "ipa": "[ʔu˧˩ zu˦ˀ˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "b9bfadcc-012d-4a14-9abf-0a3727e9a201",
                "word_id": "eef9127d-4eae-4804-a3de-d67303b0e5fd",
                "ipa": "[ʔʊw˧˨ ʐʊw˧˨]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "f180b395-fa25-4874-81a4-f6e5e0639efa",
                "word_id": "eef9127d-4eae-4804-a3de-d67303b0e5fd",
                "ipa": "[ʔʊw˨˩˦ ɹʊw˨˩˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "d1f587af-77cd-48c8-bbbc-5afba76242a6",
        "word": "khay",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947083",
        "updated_at": "2026-01-24T16:42:24.947085",
        "senses": [
            {
                "id": "fd7737e1-6f2b-4650-8d19-acba577fc50a",
                "word_id": "d1f587af-77cd-48c8-bbbc-5afba76242a6",
                "glosses": [
                    "tray"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "tray",
                        "tray"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "423d4243-cb22-4f19-ba55-390ddfe52ade",
                "word_id": "d1f587af-77cd-48c8-bbbc-5afba76242a6",
                "ipa": "[xaj˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "63c63880-d7cf-4901-942c-22b0423e0791",
                "word_id": "d1f587af-77cd-48c8-bbbc-5afba76242a6",
                "ipa": "[kʰaj˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "ae74cd54-ff9b-42a0-bd4f-ea542419ddcb",
                "word_id": "d1f587af-77cd-48c8-bbbc-5afba76242a6",
                "ipa": "[kʰa(ː)j˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "33bf501a-5c0d-448b-a659-0e035e50f50a",
        "word": "công viên",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947171",
        "updated_at": "2026-01-24T16:42:24.947172",
        "senses": [
            {
                "id": "7e37660f-a17d-4036-a166-b239629f9b1c",
                "word_id": "33bf501a-5c0d-448b-a659-0e035e50f50a",
                "glosses": [
                    "a park (ground for recreation)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "park",
                        "park"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "2b9b6c09-e17a-44de-b8fe-9674fcd6d59d",
                "word_id": "33bf501a-5c0d-448b-a659-0e035e50f50a",
                "ipa": "[kəwŋ͡m˧˧ viən˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "4abb818c-2f26-4b6b-84a0-07d639b3752a",
                "word_id": "33bf501a-5c0d-448b-a659-0e035e50f50a",
                "ipa": "[kəwŋ͡m˧˧ viəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "b3e2e30c-0d88-476d-8be9-92fb5c15fddf",
                "word_id": "33bf501a-5c0d-448b-a659-0e035e50f50a",
                "ipa": "[kəwŋ͡m˧˧ viəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "3157c205-a7c7-4aea-b790-d754756b9178",
                "word_id": "33bf501a-5c0d-448b-a659-0e035e50f50a",
                "ipa": "[kəwŋ͡m˧˧ jiəŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "ee293195-6ad8-4886-b306-bd647243243d",
        "word": "song đao",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947251",
        "updated_at": "2026-01-24T16:42:24.947253",
        "senses": [
            {
                "id": "f536f9e5-e069-4b16-b237-bf1c7b780363",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "glosses": [
                    "two backsword (sword with one sharp edge), one in each hand"
                ],
                "tags": [
                    "Chinese"
                ],
                "display_label": null,
                "examples": [
                    {
                        "text": "Mã Thanh Hùng loạng choạng một cái ngã về phía sau, hai hán tử sau lưng y song đao cùng chém xuống.",
                        "ref": "2005 [1957–1959], chapter 13, in Cao Tự Thanh, transl., Anh hùng xạ điêu, Nhà xuất bản Văn học, translation of 射雕英雄传 by Kim Dung [Jin Yong]:",
                        "english": "Mǎ Qīngxióng staggered and fell backwards; the two guys behind his back simultaneously slashed with both their backswords.",
                        "type": "quote",
                        "translation": "Mǎ Qīngxióng staggered and fell backwards; the two guys behind his back simultaneously slashed with both their backswords.",
                        "bold_text_offsets": [
                            [
                                74,
                                82
                            ]
                        ],
                        "bold_translation_offsets": [
                            [
                                100,
                                104
                            ],
                            [
                                111,
                                121
                            ]
                        ]
                    }
                ],
                "links": [
                    [
                        "fiction",
                        "fiction"
                    ],
                    [
                        "martial arts",
                        "martial arts"
                    ],
                    [
                        "backsword",
                        "backsword"
                    ],
                    [
                        "sharp",
                        "sharp#English"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "6239da40-e9f0-4e59-bfed-c91e0f0d7421",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "ipa": "[sawŋ͡m˧˧ ʔɗaːw˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "4f63239d-f82d-4493-a432-1ddcfe287c00",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "ipa": "[ʂawŋ͡m˧˧ ʔɗaːw˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "6844f7d0-e5b5-4afb-9f84-c0332bfeeb71",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "ipa": "[sɔŋ˧˧ ʔɗaːw˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "6c22ffd4-9488-4e43-9ab6-292871512641",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "ipa": "[ʂawŋ͡m˧˧ ʔɗaːw˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "5b1aac98-3603-47b1-a149-600dfe5a8362",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "ipa": "[sawŋ͡m˧˧ ʔɗaːw˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "293ea417-b4da-4206-a2b2-e0cae78afac3",
                "word_id": "ee293195-6ad8-4886-b306-bd647243243d",
                "ipa": null,
                "audio_url": "LL-Q9199 (vie)-Penn Zero MSSJ-song đao.wav",
                "ogg_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-song_%C4%91ao.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-song_%C4%91ao.wav.ogg",
                "mp3_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-song_%C4%91ao.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-song_%C4%91ao.wav.mp3",
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "bfebcc9e-7da0-4c97-87f7-ab8c1dbfc2c0",
        "word": "chống lưng",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947301",
        "updated_at": "2026-01-24T16:42:24.947303",
        "senses": [
            {
                "id": "5dd9f90f-56ed-4093-afc7-3a5887c9dc9e",
                "word_id": "bfebcc9e-7da0-4c97-87f7-ab8c1dbfc2c0",
                "glosses": [
                    "to be supported or backed by a powerful entity (often from the shadow) so that one can get away with cheating or financial doping"
                ],
                "tags": [
                    "derogatory",
                    "figuratively",
                    "often"
                ],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "derogatory",
                        "derogatory"
                    ],
                    [
                        "support",
                        "support"
                    ],
                    [
                        "back",
                        "back"
                    ],
                    [
                        "powerful",
                        "powerful"
                    ],
                    [
                        "entity",
                        "entity"
                    ],
                    [
                        "shadow",
                        "shadow"
                    ],
                    [
                        "cheating",
                        "cheating"
                    ],
                    [
                        "financial doping",
                        "financial doping"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "13ab5147-cd0c-40d8-84fe-a7704dab0d4f",
                "word_id": "bfebcc9e-7da0-4c97-87f7-ab8c1dbfc2c0",
                "ipa": "[t͡ɕəwŋ͡m˧˦ lɨŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "b4d814d8-fc16-4b4c-aa33-78fd8c78b676",
                "word_id": "bfebcc9e-7da0-4c97-87f7-ab8c1dbfc2c0",
                "ipa": "[t͡ɕəwŋ͡m˦˧˥ lɨŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "d65ff2a6-8ec0-46cc-a7eb-2057a5f6f5f9",
                "word_id": "bfebcc9e-7da0-4c97-87f7-ab8c1dbfc2c0",
                "ipa": "[cəwŋ͡m˦˥ lɨŋ˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "6fcfa975-345f-4b48-ad71-7168bfa4769e",
        "word": "động tác",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947347",
        "updated_at": "2026-01-24T16:42:24.947349",
        "senses": [
            {
                "id": "9899d860-f278-4805-9b5a-4cb7f28f18a6",
                "word_id": "6fcfa975-345f-4b48-ad71-7168bfa4769e",
                "glosses": [
                    "movement; gesture; action"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "movement",
                        "movement"
                    ],
                    [
                        "gesture",
                        "gesture"
                    ],
                    [
                        "action",
                        "action"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "ef39c72a-44ba-41ce-9b2d-4a448649ed8b",
                "word_id": "6fcfa975-345f-4b48-ad71-7168bfa4769e",
                "ipa": "[ʔɗəwŋ͡m˧˨ʔ taːk̚˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "d5c5d0fb-bb47-4e6b-9421-e68e6546dcae",
                "word_id": "6fcfa975-345f-4b48-ad71-7168bfa4769e",
                "ipa": "[ʔɗəwŋ͡m˨˩ʔ taːk̚˦˧˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "44ad1d2a-dc58-45b6-a683-125add153f4f",
                "word_id": "6fcfa975-345f-4b48-ad71-7168bfa4769e",
                "ipa": "[ʔɗəwŋ͡m˨˩˨ taːk̚˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "c1c41443-2166-45ff-a4d8-fe397d02ebbd",
        "word": "điểm chỉ",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947393",
        "updated_at": "2026-01-24T16:42:24.947398",
        "senses": [
            {
                "id": "3a6234bc-cd99-4f01-813f-91140ac8c765",
                "word_id": "c1c41443-2166-45ff-a4d8-fe397d02ebbd",
                "glosses": [
                    "to make a fingerprint; to leave a fingerprint (especially as a signature)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "fingerprint",
                        "fingerprint#English"
                    ],
                    [
                        "signature",
                        "signature#English"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "436b8229-c864-4534-9311-2d4f41c5f734",
                "word_id": "c1c41443-2166-45ff-a4d8-fe397d02ebbd",
                "ipa": "[ʔɗiəm˧˩ t͡ɕi˧˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "0279a9c9-dbaa-45aa-915a-15a2556393c1",
                "word_id": "c1c41443-2166-45ff-a4d8-fe397d02ebbd",
                "ipa": "[ʔɗiəm˧˨ t͡ɕɪj˧˨]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "3077c2fe-bcf3-4e66-a8e3-b87eda343dea",
                "word_id": "c1c41443-2166-45ff-a4d8-fe397d02ebbd",
                "ipa": "[ʔɗim˨˩˦ cɪj˨˩˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "693e4965-ae11-4d19-b66c-0930377da24d",
        "word": "放射",
        "pos": "adj",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947425",
        "updated_at": "2026-01-24T16:42:24.947426",
        "senses": [
            {
                "id": "d83322c8-5526-4353-936c-627f9dedc85c",
                "word_id": "693e4965-ae11-4d19-b66c-0930377da24d",
                "glosses": [
                    "chữ Hán form of phóng xạ (“radioactive”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "phóng xạ",
                        "phóng xạ#Vietnamese:_放射"
                    ],
                    [
                        "radioactive",
                        "radioactive"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "cf165550-0298-462b-99d0-cbd9a75b0230",
        "word": "cơm",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947698",
        "updated_at": "2026-01-24T16:42:24.947702",
        "senses": [
            {
                "id": "8a101f6b-8e95-4c23-9117-3e49293e6c2f",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "glosses": [
                    "cooked non-glutinous rice"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "cooked",
                        "cooked"
                    ],
                    [
                        "glutinous rice",
                        "glutinous rice"
                    ]
                ]
            },
            {
                "id": "4cf402de-bb52-4a25-80b8-12d9a5489ed6",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "glosses": [
                    "a rice meal"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "ăn cơm",
                        "translation": "to eat rice; to have a rice meal, optionally with meat, fish, soup, among other foods",
                        "english": "to eat rice; to have a rice meal, optionally with meat, fish, soup, among other foods",
                        "type": "example"
                    },
                    {
                        "text": "Sáng sớm, đi bắt cua đồng, đi thả diều,\nHuýt sáo nô đùa bên đám bạn nơi lũy tre, chơi trốn tìm.\nKhói bếp cay mắt mẹ già bên bếp lò.\nCơm nấu xong rồi ! Mấy đứa về ăn (bữa) cơm !",
                        "ref": "(Can we date this quote?), Sa Huỳnh, “Về ăn cơm [Come Home for Lunch]”:",
                        "english": "Early in the morning, we'd go catch some field crabs, fly some kites,\nWhistle and goof with our friends around bamboo groves, play hide and seek.\nSmoke from the fireplace'd irritate our old mom's eyes.\nThe rice is done! Y'all come home for lunch!",
                        "type": "quote",
                        "translation": "Early in the morning, we'd go catch some field crabs, fly some kites,\nWhistle and goof with our friends around bamboo groves, play hide and seek.\nSmoke from the fireplace'd irritate our old mom's eyes.\nThe rice is done! Y'all come home for lunch!",
                        "bold_text_offsets": [
                            [
                                166,
                                169
                            ],
                            [
                                171,
                                174
                            ]
                        ]
                    }
                ],
                "links": [
                    [
                        "rice",
                        "rice"
                    ],
                    [
                        "meal",
                        "meal"
                    ]
                ]
            },
            {
                "id": "8700bcb0-0320-420f-a640-4db1bdf91ca3",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "glosses": [
                    "meat; flesh"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "meat",
                        "meat"
                    ],
                    [
                        "flesh",
                        "flesh"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "d914bc22-62f0-4281-8ef2-09ab87883fcf",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "ipa": "[kəːm˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "5ed96cdf-c94e-4e4c-ba6d-cb4f30b96b9d",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "ipa": "[kəːm˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "d246b174-175f-4239-a105-c9b8188fe6b2",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "ipa": "[kəːm˧˧]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "d9f7194c-a781-4e46-8ea8-464d5b494433",
                "word_id": "cf165550-0298-462b-99d0-cbd9a75b0230",
                "ipa": null,
                "audio_url": "LL-Q9199 (vie)-Penn Zero MSSJ-cơm.wav",
                "ogg_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7a/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C6%A1m.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C6%A1m.wav.ogg",
                "mp3_url": "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7a/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C6%A1m.wav/LL-Q9199_%28vie%29-Penn_Zero_MSSJ-c%C6%A1m.wav.mp3",
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "ce33c879-f87e-4869-925c-18ca41f8dac8",
        "word": "恥辱",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947763",
        "updated_at": "2026-01-24T16:42:24.947764",
        "senses": [
            {
                "id": "0a161d7f-c534-4ae6-ba15-894bb640acf1",
                "word_id": "ce33c879-f87e-4869-925c-18ca41f8dac8",
                "glosses": [
                    "chữ Hán form of sỉ nhục (“to dishonor”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "sỉ nhục",
                        "sỉ nhục#Vietnamese:_恥辱"
                    ],
                    [
                        "dishonor",
                        "dishonor"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
        "word": "khiếp sợ",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947816",
        "updated_at": "2026-01-24T16:42:24.947818",
        "senses": [
            {
                "id": "535d4bfc-f868-495c-933b-a43f96e8e62b",
                "word_id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
                "glosses": [
                    "to be afraid (of); to fear; to dread; to be frightened"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "afraid",
                        "afraid"
                    ],
                    [
                        "fear",
                        "fear"
                    ],
                    [
                        "dread",
                        "dread"
                    ],
                    [
                        "frightened",
                        "frightened"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "5bb9ce00-b878-4d06-b217-d8e685b23f8b",
                "word_id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
                "ipa": "[xiəp̚˧˦ səː˧˨ʔ]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "bc6a8b11-f6ca-49d7-91eb-97b86151eff3",
                "word_id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
                "ipa": "[kʰiəp̚˦˧˥ ʂəː˨˩ʔ]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "3b84f1d6-5617-4e09-90be-da3f7e2d1bb1",
                "word_id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
                "ipa": "[kʰiəp̚˦˧˥ səː˨˩ʔ]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "1121a8c9-ab21-4368-b76b-061c2beb989b",
                "word_id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
                "ipa": "[kʰip̚˦˥ ʂəː˨˩˨]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            },
            {
                "id": "f6d42d27-88fa-416a-9092-04483315b708",
                "word_id": "a597722e-7fe8-4bfe-9190-95a30810caf1",
                "ipa": "[kʰip̚˦˥ səː˨˩˨]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "b537e068-f0e7-4281-8d84-40df280bfd78",
        "word": "擴散",
        "pos": "verb",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947878",
        "updated_at": "2026-01-24T16:42:24.947880",
        "senses": [
            {
                "id": "839e524f-5283-4ee3-8b58-7132653abb66",
                "word_id": "b537e068-f0e7-4281-8d84-40df280bfd78",
                "glosses": [
                    "chữ Hán form of khuếch tán (“to diffuse”)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [],
                "links": [
                    [
                        "chữ Hán",
                        "chữ Hán#Vietnamese"
                    ],
                    [
                        "khuếch tán",
                        "khuếch tán#Vietnamese:_擴散"
                    ],
                    [
                        "diffuse",
                        "diffuse"
                    ]
                ]
            }
        ],
        "sounds": [],
        "forms": []
    },
    {
        "id": "ff251339-7dbf-44ae-b9e2-84d275dd756d",
        "word": "khủng hoảng",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.947954",
        "updated_at": "2026-01-24T16:42:24.947957",
        "senses": [
            {
                "id": "6df5d98b-7c6e-4e1a-bc7f-24de6e6a18c9",
                "word_id": "ff251339-7dbf-44ae-b9e2-84d275dd756d",
                "glosses": [
                    "crisis"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "khủng hoảng kinh tế/tài chính/tiền tệ",
                        "translation": "an economic/financial/currency crisis",
                        "english": "an economic/financial/currency crisis",
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "crisis",
                        "crisis"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "da49dc2e-71c1-4c2c-a079-3c795817f680",
                "word_id": "ff251339-7dbf-44ae-b9e2-84d275dd756d",
                "ipa": "[xʊwŋ͡m˧˩ hwaːŋ˧˩]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "23e5254b-1262-4d7d-a64d-7f98c1443b50",
                "word_id": "ff251339-7dbf-44ae-b9e2-84d275dd756d",
                "ipa": "[kʰʊwŋ͡m˧˨ hwaːŋ˧˨]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "7d9d357c-15c0-4d35-b133-991215267c18",
                "word_id": "ff251339-7dbf-44ae-b9e2-84d275dd756d",
                "ipa": "[kʰʊwŋ͡m˨˩˦ waːŋ˨˩˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    },
    {
        "id": "1279d1b7-75b1-4298-b1e1-216898b3b6ae",
        "word": "tổ chức",
        "pos": "noun",
        "lang_code": "vi",
        "etymology_text": null,
        "head_templates": null,
        "etymology_templates": null,
        "created_at": "2026-01-24T16:42:24.948095",
        "updated_at": "2026-01-24T16:42:24.948100",
        "senses": [
            {
                "id": "b57c2cf7-1bc8-4269-aa15-5385c79bf236",
                "word_id": "1279d1b7-75b1-4298-b1e1-216898b3b6ae",
                "glosses": [
                    "organization (quality of being organized)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "có tổ chức",
                        "translation": "organized; orderly",
                        "english": "organized; orderly",
                        "type": "example"
                    },
                    {
                        "text": "vô tổ chức",
                        "translation": "unorganized; disorganized; in disarray",
                        "english": "unorganized; disorganized; in disarray",
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "organization",
                        "organization"
                    ]
                ]
            },
            {
                "id": "3d99a333-a695-4533-99e2-ec3382b8e755",
                "word_id": "1279d1b7-75b1-4298-b1e1-216898b3b6ae",
                "glosses": [
                    "an organization (group of people or other legal entities with an explicit purpose and written rules; group of people consciously cooperating)"
                ],
                "tags": [],
                "display_label": null,
                "examples": [
                    {
                        "text": "các tổ chức từ thiện",
                        "translation": "charitable organizations; charities",
                        "english": "charitable organizations; charities",
                        "type": "example"
                    }
                ],
                "links": [
                    [
                        "organization",
                        "organization"
                    ]
                ]
            }
        ],
        "sounds": [
            {
                "id": "4a7288b9-e71f-416e-8798-74539d560bdc",
                "word_id": "1279d1b7-75b1-4298-b1e1-216898b3b6ae",
                "ipa": "[to˧˩ t͡ɕɨk̚˧˦]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Hà-Nội"
                ]
            },
            {
                "id": "499a102f-1562-4538-8060-b4aeeeceff67",
                "word_id": "1279d1b7-75b1-4298-b1e1-216898b3b6ae",
                "ipa": "[tow˧˨ t͡ɕɨk̚˦˧˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": [
                    "Huế"
                ]
            },
            {
                "id": "61626607-aab7-46e4-b898-f37edcb03ae5",
                "word_id": "1279d1b7-75b1-4298-b1e1-216898b3b6ae",
                "ipa": "[tow˨˩˦ cɨk̚˦˥]",
                "audio_url": null,
                "ogg_url": null,
                "mp3_url": null,
                "tags": []
            }
        ],
        "forms": []
    }
];
