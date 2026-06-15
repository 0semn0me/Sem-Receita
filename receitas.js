const bancoDeDados = [
  {
    "id": 1,
    "nome": "Pudim de Leite",
    "categoria": "Doces",
    "descricao": "Clássico liso, cremoso e sem furinhos.",
    "variacoes": [
      {
        "nome": "Receita Tradicional da Vovó",
        "ingredientes": [
          "1 lata de leite condensado",
          "1 medida de leite integral",
          "3 ovos inteiros"
        ],
        "passos": [
          "Bata tudo no liquidificador por 5 minutos.",
          "Passe numa peneira fina para tirar as bolhas.",
          "Asse em banho-maria a 180°C por 1h30."
        ],
        "finalizacao": [
          "Deixe gelar por 4 horas antes de desenformar."
        ]
      },
      {
        "nome": "Modo Gourmet / Rápido",
        "ingredientes": [
          "1 lata de leite condensado",
          "1 caixinha de creme de leite",
          "3 ovos",
          "1 colher de essência de baunilha"
        ],
        "passos": [
          "Misture tudo com um fouet sem criar ar.",
          "Despeje na forma caramelizada.",
          "Leve ao micro-ondas em potência média por 9 minutos."
        ],
        "finalizacao": [
          "Esfrie e gele por 2 horas."
        ]
      }
    ]
  },
  {
    "id": 2,
    "nome": "Bolo de Cenoura",
    "categoria": "Doces",
    "descricao": "Massa fofinha com cobertura crocante de chocolate.",
    "variacoes": [
      {
        "nome": "Com Calda de Brigadeiro Vulcão",
        "ingredientes": [
          "3 cenouras médias",
          "3 ovos",
          "1 xícara de óleo",
          "2 xícaras de açúcar",
          "2 xícaras de farinha",
          "1 colher de fermento"
        ],
        "passos": [
          "Bata cenoura, ovos e óleo no liquidificador.",
          "Misture açúcar e farinha à mão.",
          "Asse por 40 minutos a 180°C e cubra com brigadeiro mole."
        ],
        "finalizacao": [
          "Sirva morno para o brigadeiro escorrer."
        ]
      }
    ]
  },
  {
    "id": 3,
    "nome": "Lasanha Bolonhesa",
    "categoria": "Massas",
    "descricao": "Camadas perfeitas de massa, molho de carne e muito queijo.",
    "variacoes": [
      {
        "nome": "Massa Direta ao Forno",
        "ingredientes": [
          "500g de massa de lasanha direto ao forno",
          "500g de patinho moído",
          "2 sachês de molho de tomate",
          "400g de presunto",
          "400g de muçarela"
        ],
        "passos": [
          "Faça um molho bolonhesa bem suculento.",
          "Monte em camadas alternando molho, massa, presunto e queijo.",
          "Cubra com papel alumínio e asse por 30 minutos."
        ],
        "finalizacao": [
          "Retire o alumínio nos últimos 10 minutos para gratinar."
        ]
      }
    ]
  },
  {
    "id": 4,
    "nome": "Feijoada Completa",
    "categoria": "Carnes",
    "descricao": "Feijão preto bem apurado com carnes selecionadas.",
    "variacoes": [
      {
        "nome": "Tradicional com Pertences",
        "ingredientes": [
          "1kg de feijão preto",
          "500g de carne seca",
          "300g de costelinha de porco",
          "200g de paio",
          "200g de calabresa"
        ],
        "passos": [
          "Dessalgue as carnes por 24 horas trocando a água.",
          "Cozinhe o feijão com as carnes duras primeiro.",
          "Adicione os embutidos e deixe o caldo engrossar bem."
        ],
        "finalizacao": [
          "Sirva com couve refogada, farofa e laranja."
        ]
      }
    ]
  },
  {
    "id": 5,
    "nome": "Frango Grelhado",
    "categoria": "Carnes",
    "descricao": "Filé de frango dourado, suculento e muito bem temperado.",
    "variacoes": [
      {
        "nome": "Marinado no Limão e Ervas",
        "ingredientes": [
          "500g de filé de peito de frango",
          "Suco de 1 limão",
          "2 dentes de alho amassados",
          "Ervas finas secas",
          "1 colher de azeite"
        ],
        "passos": [
          "Deixe o frango na marinada por 20 minutos.",
          "Aqueça frigideira antiaderente com fio de azeite.",
          "Grelhe por 4 minutos de cada lado sem mexer."
        ],
        "finalizacao": [
          "Deixe descansar 2 minutos antes de cortar."
        ]
      }
    ]
  },
  {
    "id": 6,
    "nome": "Tapioca Recheada",
    "categoria": "Lanches",
    "descricao": "Goma de mandioca tostada na medida certa.",
    "variacoes": [
      {
        "nome": "Manteiga de Garrafa e Queijo Coalho",
        "ingredientes": [
          "2 xícaras de goma de tapioca hidratada",
          "150g de queijo coalho ralado",
          "2 colheres de manteiga de garrafa"
        ],
        "passos": [
          "Peneire a goma direto na frigideira fria.",
          "Ligue o fogo e espere a massa unir.",
          "Vire, coloque o queijo coalho e feche regando com a manteiga."
        ],
        "finalizacao": [
          "Sirva imediatamente bem quentinha."
        ]
      }
    ]
  },
  {
    "id": 7,
    "nome": "Arroz de Carreteiro",
    "categoria": "Arroz",
    "descricao": "Arroz campeiro bem temperado e soltinho.",
    "variacoes": [
      {
        "nome": "Com Sobras de Churrasco",
        "ingredientes": [
          "2 xícaras de arroz",
          "400g de sobras de churrasco picadas",
          "1 cebola grande",
          "2 dentes de alho",
          "Cheiro-verde picado"
        ],
        "passos": [
          "Frite as carnes picadas até dourarem.",
          "Refogue cebola e alho na mesma gordura.",
          "Adicione o arroz, frite um pouco e cozinhe com água quente."
        ],
        "finalizacao": [
          "Finalize com bastante cheiro-verde por cima."
        ]
      }
    ]
  },
  {
    "id": 8,
    "nome": "Estrogonofe de Carne",
    "categoria": "Carnes",
    "descricao": "O clássico das festas brasileiras, cremoso e reconfortante.",
    "variacoes": [
      {
        "nome": "Estilo Clássico Brasileiro",
        "ingredientes": [
          "500g de alcatra em tiras",
          "1 cebola picada",
          "200g de champignon",
          "200g de creme de leite",
          "2 colheres de mostarda",
          "1 colher de molho inglês"
        ],
        "passos": [
          "Sele a carne em fogo alto.",
          "Refogue a cebola e os cogumelos.",
          "Adicione a mostarda e molho inglês.",
          "Desligue o fogo e misture o creme de leite."
        ],
        "finalizacao": [
          "Sirva com arroz branco e batata palha."
        ]
      },
      {
        "nome": "Estrogonofe de Frango",
        "ingredientes": [
          "500g de peito de frango em cubos",
          "1 cebola",
          "200g de champignon",
          "1 caixinha de creme de leite",
          "Ketchup e mostarda a gosto"
        ],
        "passos": [
          "Refogue o frango com cebola e alho.",
          "Adicione ketchup, mostarda e cogumelos.",
          "Finalize com creme de leite fora do fogo."
        ],
        "finalizacao": [
          "Sirva com arroz, batata palha e salada verde."
        ]
      }
    ]
  },
  {
    "id": 9,
    "nome": "Yakisoba",
    "categoria": "Massas",
    "descricao": "Macarrão frito oriental com vegetais crocantes.",
    "variacoes": [
      {
        "nome": "Tradicional de Frango",
        "ingredientes": [
          "200g de macarrão para yakisoba",
          "200g de peito de frango",
          "1 cenoura",
          "1 brócolis",
          "Acelga, shoyu, óleo de gergelim"
        ],
        "passos": [
          "Refogue o frango. Adicione os vegetais.",
          "Misture o macarrão cozido.",
          "Finalize com o molho (shoyu + amido)."
        ],
        "finalizacao": [
          "Gergelim torrado por cima."
        ]
      }
    ]
  },
  {
    "id": 10,
    "nome": "Brigadeiro Gourmet",
    "categoria": "Doces",
    "descricao": "A evolução do clássico nacional com chocolate nobre.",
    "variacoes": [
      {
        "nome": "Meio Amargo com Pistache",
        "ingredientes": [
          "1 lata de leite condensado",
          "1 caixinha de creme de leite",
          "100g de chocolate 50% cacau",
          "Pistache picado"
        ],
        "passos": [
          "Leve ao fogo até o ponto de enrolar.",
          "Deixe esfriar completamente.",
          "Enrole e passe no pistache triturado."
        ],
        "finalizacao": [
          "Coloque em forminhas luxuosas."
        ]
      },
      {
        "nome": "Tradicional de Panela",
        "ingredientes": [
          "1 lata de leite condensado",
          "3 colheres de achocolatado",
          "1 colher de manteiga",
          "Granulado de chocolate"
        ],
        "passos": [
          "Misture tudo na panela em fogo médio mexendo sempre.",
          "Cozinhe até soltar do fundo.",
          "Deixe esfriar e enrole com as mãos untadas."
        ],
        "finalizacao": [
          "Passe no granulado e coloque em forminhas."
        ]
      }
    ]
  },
  {
    "id": 11,
    "nome": "Risoto de Funghi",
    "categoria": "Arroz",
    "descricao": "Sofisticado e terroso, um prato italiano que impressiona.",
    "variacoes": [
      {
        "nome": "Clássico com Parmesão",
        "ingredientes": [
          "200g de arroz arbóreo",
          "50g de funghi secchi",
          "Caldo de legumes quente",
          "150ml de vinho branco seco",
          "60g de parmesão",
          "60g de manteiga"
        ],
        "passos": [
          "Hidrate o funghi em água morna por 30 min.",
          "Refogue o arroz, deglaceie com vinho.",
          "Adicione o caldo aos poucos mexendo sempre por 18 min.",
          "Finalize com manteiga gelada e parmesão (mantecatura)."
        ],
        "finalizacao": [
          "Sirva imediatamente para manter a cremosidade."
        ]
      }
    ]
  },
  {
    "id": 12,
    "nome": "Guacamole",
    "categoria": "Lanches",
    "descricao": "Dip mexicano fresco e nutritivo.",
    "variacoes": [
      {
        "nome": "Autêntica",
        "ingredientes": [
          "2 abacates maduros",
          "1 tomate picado",
          "1/2 cebola roxa",
          "Suco de 1 limão",
          "Coentro fresco",
          "Sal e pimenta"
        ],
        "passos": [
          "Amasse o abacate grosseiramente.",
          "Misture os demais ingredientes.",
          "Tempere com sal e pimenta."
        ],
        "finalizacao": [
          "Sirva imediatamente com nachos de milho."
        ]
      }
    ]
  },
  {
    "id": 13,
    "nome": "Moussaka Grega",
    "categoria": "Carnes",
    "descricao": "A lasanha grega feita com berinjela e molho bechamel.",
    "variacoes": [
      {
        "nome": "Tradicional",
        "ingredientes": [
          "2 berinjelas fatiadas",
          "500g de carne moída",
          "Molho de tomate temperado",
          "Molho bechamel",
          "Queijo parmesão"
        ],
        "passos": [
          "Grelhe as fatias de berinjela com azeite.",
          "Prepare o ragù de carne com cebola e tomate.",
          "Monte camadas: berinjela, carne, molho.",
          "Cubra com bechamel e asse a 180°C por 40 min."
        ],
        "finalizacao": [
          "Gratine até dourar. Deixe descansar 10 min antes de cortar."
        ]
      }
    ]
  },
  {
    "id": 14,
    "nome": "Sushi Caseiro",
    "categoria": "Peixes",
    "descricao": "A arte japonesa simplificada para fazer em casa.",
    "variacoes": [
      {
        "nome": "Hossomaki de Salmão",
        "ingredientes": [
          "2 xícaras de arroz para sushi",
          "Alga nori",
          "150g de salmão fresco",
          "3 colheres de vinagre de arroz",
          "1 colher de açúcar",
          "1 colher de sal"
        ],
        "passos": [
          "Tempere o arroz cozido com vinagre, açúcar e sal.",
          "Espalhe na alga nori com a mão úmida.",
          "Adicione o salmão em tiras e enrole com esteira.",
          "Pressione bem e corte em 6 pedaços com faca molhada."
        ],
        "finalizacao": [
          "Sirva com shoyu, gengibre e wasabi."
        ]
      }
    ]
  },
  {
    "id": 15,
    "nome": "Bacalhau à Gomes de Sá",
    "categoria": "Peixes",
    "descricao": "Receita portuguesa clássica e reconfortante.",
    "variacoes": [
      {
        "nome": "Tradicional",
        "ingredientes": [
          "500g de bacalhau dessalgado em lascas",
          "4 batatas cozidas em rodelas",
          "3 ovos cozidos",
          "Azeitonas pretas",
          "2 cebolas",
          "Azeite extra virgem"
        ],
        "passos": [
          "Desfie o bacalhau e refogue no azeite com muita cebola.",
          "Adicione as batatas cozidas em rodelas.",
          "Leve ao forno a 180°C por 20 minutos.",
          "Decore com ovos cozidos e azeitonas."
        ],
        "finalizacao": [
          "Regue com azeite extra virgem e polvilhe salsinha."
        ]
      }
    ]
  },
  {
    "id": 16,
    "nome": "Frango Xadrez",
    "categoria": "Frango",
    "descricao": "Um clássico chinês adaptado para o dia a dia brasileiro.",
    "variacoes": [
      {
        "nome": "Com Amendoim",
        "ingredientes": [
          "500g de peito de frango em cubos",
          "1 pimentão verde",
          "1 pimentão vermelho",
          "1 cebola",
          "100g de amendoim torrado",
          "Shoyu, amido de milho e óleo de gergelim"
        ],
        "passos": [
          "Tempere o frango com shoyu e amido.",
          "Frite os cubos em wok bem quente.",
          "Adicione os legumes e pimentões.",
          "Finalize com shoyu e amendoim."
        ],
        "finalizacao": [
          "Sirva sobre arroz branco com gergelim por cima."
        ]
      }
    ]
  },
  {
    "id": 17,
    "nome": "Sopa de Cebola Gratinada",
    "categoria": "Sopas",
    "descricao": "Caldo francês intenso, gratinado com queijo derretido.",
    "variacoes": [
      {
        "nome": "Gratinada Tradicional",
        "ingredientes": [
          "1kg de cebola fatiada fina",
          "50g de manteiga",
          "200ml de vinho branco",
          "1 litro de caldo de carne",
          "Pão amanhecido fatiado",
          "200g de queijo gruyère ou muçarela"
        ],
        "passos": [
          "Caramelize a cebola na manteiga por 30 min em fogo baixo.",
          "Deglaceie com vinho e adicione o caldo.",
          "Cozinhe por 20 min. Transfira para travessas individuais.",
          "Coloque o pão, cubra com queijo e gratine no forno."
        ],
        "finalizacao": [
          "Sirva borbulhando direto do forno."
        ]
      }
    ]
  },
  {
    "id": 18,
    "nome": "Tiramisu",
    "categoria": "Sobremesas",
    "descricao": "Sobremesa italiana de café e mascarpone.",
    "variacoes": [
      {
        "nome": "Clássico com Mascarpone",
        "ingredientes": [
          "500g de queijo mascarpone",
          "4 ovos",
          "100g de açúcar",
          "300ml de café espresso forte frio",
          "300g de biscoito champanhe",
          "Cacau em pó para finalizar"
        ],
        "passos": [
          "Bata gemas com açúcar até virar creme claro.",
          "Incorpore o mascarpone delicadamente.",
          "Bata claras em neve e incorpore ao creme.",
          "Molhe cada biscoito no café rapidamente.",
          "Monte camadas: biscoito, creme, biscoito, creme.",
          "Geladeira por 4 horas mínimo."
        ],
        "finalizacao": [
          "Polvilhe cacau generosamente antes de servir."
        ]
      }
    ]
  },
  {
    "id": 19,
    "nome": "Hummus",
    "categoria": "Lanches",
    "descricao": "Pasta cremosa de grão de bico do Oriente Médio.",
    "variacoes": [
      {
        "nome": "Com Tahine",
        "ingredientes": [
          "400g de grão de bico cozido",
          "3 colheres de tahine",
          "2 dentes de alho",
          "Suco de 1 limão",
          "4 colheres de azeite extra virgem",
          "Sal e cominho"
        ],
        "passos": [
          "Bata grão de bico, tahine, alho e limão no processador.",
          "Adicione azeite aos poucos até ficar liso.",
          "Tempere com sal e cominho."
        ],
        "finalizacao": [
          "Sirva com azeite, páprica e pão pita aquecido."
        ]
      }
    ]
  },
  {
    "id": 20,
    "nome": "Shakshuka",
    "categoria": "Vegano",
    "descricao": "Ovos pochê em molho de tomate e pimentão temperado.",
    "variacoes": [
      {
        "nome": "Picante com Feta",
        "ingredientes": [
          "4 ovos",
          "400g de tomate pelado",
          "1 pimentão vermelho",
          "1 cebola",
          "3 dentes de alho",
          "Cominho, páprica e pimenta cayenne",
          "Queijo feta (opcional)"
        ],
        "passos": [
          "Refogue cebola, alho e pimentão no azeite.",
          "Adicione os tomates e temperos. Cozinhe 10 min.",
          "Faça covas no molho e quebre os ovos dentro.",
          "Tampe e cozinhe até as claras firmarem mas a gema ainda mole."
        ],
        "finalizacao": [
          "Adicione feta esfarelado e coentro fresco."
        ]
      }
    ]
  },
  {
    "id": 21,
    "nome": "Curry de Grão de Bico",
    "categoria": "Vegano",
    "descricao": "Vegano, aromático e muito nutritivo.",
    "variacoes": [
      {
        "nome": "Ao Leite de Coco",
        "ingredientes": [
          "2 latas de grão de bico",
          "400ml de leite de coco",
          "1 cebola",
          "3 dentes de alho",
          "1 colher de pasta de curry",
          "1 colher de cúrcuma",
          "Espinafre fresco"
        ],
        "passos": [
          "Refogue cebola e alho com pasta de curry e cúrcuma.",
          "Adicione o grão de bico e o leite de coco.",
          "Cozinhe 15 min até engrossar.",
          "Finalize com espinafre fresco."
        ],
        "finalizacao": [
          "Sirva com arroz basmati e pão naan."
        ]
      }
    ]
  },
  {
    "id": 22,
    "nome": "Chili com Carne",
    "categoria": "Carnes",
    "descricao": "Prato tex-mex rico, encorpado e apimentado.",
    "variacoes": [
      {
        "nome": "Com Feijão e Pimenta",
        "ingredientes": [
          "500g de carne moída",
          "2 latas de feijão carioca",
          "400g de tomate pelado",
          "1 cebola",
          "2 pimentas dedo de moça",
          "Cominho, páprica defumada e sal"
        ],
        "passos": [
          "Refogue a carne moída até dourar bem.",
          "Adicione cebola, pimenta e temperos.",
          "Junte o feijão e o tomate pelado.",
          "Cozinhe em fogo baixo por 30 min."
        ],
        "finalizacao": [
          "Sirva com creme azedo, queijo cheddar e nachos."
        ]
      }
    ]
  },
  {
    "id": 23,
    "nome": "Paella Valenciana",
    "categoria": "Arroz",
    "descricao": "O prato espanhol de frutos do mar com açafrão.",
    "variacoes": [
      {
        "nome": "Mista de Frutos do Mar",
        "ingredientes": [
          "400g de arroz bomba",
          "300g de camarão",
          "200g de lula",
          "200g de marisco",
          "Açafrão em pistilos",
          "Caldo de peixe",
          "Pimentão e ervilhas"
        ],
        "passos": [
          "Refogue os frutos do mar e reserve.",
          "Frite o arroz com alho e pimentão.",
          "Adicione caldo com açafrão em quantidade certa.",
          "Coloque os frutos do mar e cozinhe sem mexer até secar."
        ],
        "finalizacao": [
          "Faça o socarrat: brasa final para tostar o fundo. Decore com limão."
        ]
      }
    ]
  },
  {
    "id": 24,
    "nome": "Bolo de Rolo",
    "categoria": "Bolos",
    "descricao": "Patrimônio cultural pernambucano de goiabada.",
    "variacoes": [
      {
        "nome": "Goiabada Cascão Tradicional",
        "ingredientes": [
          "200g de manteiga",
          "200g de açúcar",
          "6 ovos",
          "200g de farinha de trigo",
          "300g de goiabada derretida"
        ],
        "passos": [
          "Bata manteiga com açúcar e adicione os ovos um a um.",
          "Misture a farinha peneirada.",
          "Espalhe camadas finíssimas em papel manteiga e asse 5 min cada.",
          "Passe a goiabada derretida e enrole ainda quente."
        ],
        "finalizacao": [
          "Polvilhe açúcar de confeiteiro e corte em rodelas."
        ]
      }
    ]
  },
  {
    "id": 25,
    "nome": "Panqueca Americana",
    "categoria": "Café da Manhã",
    "descricao": "Panquecas fofas para um café da manhã especial.",
    "variacoes": [
      {
        "nome": "Com Mel e Frutas",
        "ingredientes": [
          "2 xícaras de farinha",
          "1 colher de fermento",
          "1 colher de açúcar",
          "1 pitada de sal",
          "2 ovos",
          "1 xícara de leite",
          "2 colheres de manteiga derretida"
        ],
        "passos": [
          "Misture secos e úmidos separadamente.",
          "Una as misturas sem trabalhar demais (pode ter grumos).",
          "Descanse a massa 5 min.",
          "Cozinhe em frigideira antiaderente até surgirem bolhas, vire."
        ],
        "finalizacao": [
          "Empilhe e regue com mel, maple syrup ou frutas."
        ]
      }
    ]
  },
  {
    "id": 26,
    "nome": "Salmão ao Maracujá",
    "categoria": "Peixes",
    "descricao": "Contraste perfeito entre gordura do salmão e acidez do maracujá.",
    "variacoes": [
      {
        "nome": "Grelhado com Calda",
        "ingredientes": [
          "4 filés de salmão",
          "Suco de 3 maracujás",
          "2 colheres de açúcar",
          "1 colher de manteiga",
          "Sal e pimenta"
        ],
        "passos": [
          "Tempere o salmão com sal e pimenta.",
          "Grelhe em frigideira quente 3 min cada lado.",
          "Prepare a calda aquecendo suco de maracujá com açúcar e manteiga.",
          "Reduza até encorpar levemente."
        ],
        "finalizacao": [
          "Decore com sementes de maracujá e sirva com arroz de couve."
        ]
      }
    ]
  },
  {
    "id": 27,
    "nome": "Carne de Panela",
    "categoria": "Carnes",
    "descricao": "Carne que desmancha no prato, prato de domingo.",
    "variacoes": [
      {
        "nome": "Com Batatas e Cenoura",
        "ingredientes": [
          "1kg de acém ou músculo",
          "3 batatas em cubos",
          "2 cenouras",
          "1 cebola",
          "4 dentes de alho",
          "1 caixa de molho de tomate",
          "Louro, sal e pimenta"
        ],
        "passos": [
          "Sele a carne bem dourada em óleo quente.",
          "Refogue cebola e alho. Adicione molho de tomate.",
          "Cozinhe na pressão por 35 min.",
          "Adicione legumes e cozinhe mais 15 min sem pressão."
        ],
        "finalizacao": [
          "Finalize com salsinha fresca e sirva com arroz e mandioca."
        ]
      }
    ]
  },
  {
    "id": 28,
    "nome": "Fettuccine Alfredo",
    "categoria": "Massas",
    "descricao": "Massa italiana simples, só manteiga e parmesão.",
    "variacoes": [
      {
        "nome": "Original Romano",
        "ingredientes": [
          "400g de fettuccine",
          "80g de manteiga sem sal",
          "100g de parmesão ralado fino",
          "Água do cozimento da massa",
          "Pimenta-do-reino"
        ],
        "passos": [
          "Cozinhe o fettuccine al dente. Salve 1 xícara da água.",
          "Misture manteiga e metade do parmesão fora do fogo.",
          "Adicione o macarrão quente e vá acrescentando água do cozimento.",
          "Mexa vigorosamente até virar creme acetinado."
        ],
        "finalizacao": [
          "Sirva com pimenta preta recém moída e mais parmesão."
        ]
      }
    ]
  },
  {
    "id": 29,
    "nome": "Falafel",
    "categoria": "Lanches",
    "descricao": "Bolinho de grão de bico frito, crocante por fora.",
    "variacoes": [
      {
        "nome": "Tradicional com Tahine",
        "ingredientes": [
          "400g de grão de bico cru hidratado 24h",
          "1 cebola pequena",
          "3 dentes de alho",
          "1 maço de salsinha",
          "1 maço de coentro",
          "Cominho, sal e farinha de rosca"
        ],
        "passos": [
          "Processe o grão de bico cru (não cozido!) com todos os ingredientes.",
          "Adicione farinha de rosca até dar liga.",
          "Modele bolinhas e refrigere 30 min.",
          "Frite em óleo a 180°C por 3-4 min até dourar."
        ],
        "finalizacao": [
          "Sirva com molho de tahine e pão pita."
        ]
      }
    ]
  },
  {
    "id": 30,
    "nome": "Galinhada Mineira",
    "categoria": "Frango",
    "descricao": "Arroz e frango cozidos juntos com açafrão da terra.",
    "variacoes": [
      {
        "nome": "Com Açafrão da Terra",
        "ingredientes": [
          "1 frango caipira cortado",
          "2 xícaras de arroz",
          "1 colher de açafrão da terra",
          "1 cebola",
          "3 dentes de alho",
          "1 tomate",
          "Cheiro-verde e sal"
        ],
        "passos": [
          "Doure os pedaços de frango em óleo quente.",
          "Refogue cebola, alho e tomate na mesma gordura.",
          "Adicione açafrão e o arroz cru. Frite 2 min.",
          "Recoloque o frango e cubra com água fervente.",
          "Cozinhe em fogo baixo por 25-30 min."
        ],
        "finalizacao": [
          "Sirva com rodelas de limão e pimenta biquinho."
        ]
      }
    ]
  },
  {
    "id": 31,
    "nome": "Quiche Lorraine",
    "categoria": "Tortas",
    "descricao": "Torta salgada francesa com recheio cremoso de bacon e queijo.",
    "variacoes": [
      {
        "nome": "Clássica com Bacon",
        "ingredientes": [
          "Massa podre: 200g farinha, 100g manteiga, 1 ovo, sal",
          "200g de bacon em cubinhos",
          "3 ovos",
          "200ml de creme de leite fresco",
          "100g de gruyère ralado",
          "Noz-moscada e pimenta"
        ],
        "passos": [
          "Prepare a massa, forre a forma e asse às cegas por 15 min.",
          "Frite o bacon até dourar.",
          "Bata ovos com creme, queijo e temperos.",
          "Distribua o bacon e despeje o creme.",
          "Asse a 180°C por 35-40 min."
        ],
        "finalizacao": [
          "Sirva morna com salada verde."
        ]
      }
    ]
  },
  {
    "id": 32,
    "nome": "Fondue de Queijo",
    "categoria": "Lanches",
    "descricao": "Para compartilhar em noites frias com vinho branco.",
    "variacoes": [
      {
        "nome": "Suíço Clássico",
        "ingredientes": [
          "200g de queijo gruyère ralado",
          "200g de queijo emmental ralado",
          "200ml de vinho branco seco",
          "1 dente de alho",
          "1 colher de amido de milho",
          "Kirsch e noz-moscada"
        ],
        "passos": [
          "Esfregue alho cortado na panela de fondue.",
          "Dissolva o amido no vinho.",
          "Derreta os queijos com o vinho em fogo baixo mexendo em 8.",
          "Finalize com kirsch e noz-moscada."
        ],
        "finalizacao": [
          "Sirva com cubos de pão, batata e legumes branqueados."
        ]
      }
    ]
  },
  {
    "id": 33,
    "nome": "Mousse de Chocolate",
    "categoria": "Sobremesas",
    "descricao": "Leve, aerada e intensamente chocolatuda.",
    "variacoes": [
      {
        "nome": "Com Chocolate 70%",
        "ingredientes": [
          "200g de chocolate amargo 70%",
          "4 ovos (claras e gemas separadas)",
          "3 colheres de açúcar",
          "50g de manteiga sem sal",
          "Pitada de sal"
        ],
        "passos": [
          "Derreta chocolate com manteiga em banho-maria.",
          "Bata gemas com açúcar até virar creme amarelo.",
          "Incorpore o chocolate ao creme de gemas.",
          "Bata claras em neve firme com pitada de sal.",
          "Incorpore as claras ao chocolate em 3 adições delicadamente."
        ],
        "finalizacao": [
          "Refrigere por 3h. Sirva com raspas de chocolate."
        ]
      }
    ]
  },
  {
    "id": 34,
    "nome": "Bife à Parmegiana",
    "categoria": "Carnes",
    "descricao": "O prato mais pedido nas churrascarias brasileiras.",
    "variacoes": [
      {
        "nome": "Clássico com Muçarela",
        "ingredientes": [
          "4 bifes de filé ou contrafilé",
          "2 ovos batidos",
          "Farinha de rosca temperada",
          "Molho de tomate caseiro",
          "400g de muçarela",
          "Orégano e azeite"
        ],
        "passos": [
          "Bata os bifes com martelo até ficarem finos.",
          "Tempere, empane em ovo e farinha de rosca.",
          "Frite em óleo quente até dourar dos dois lados.",
          "Transfira para refratário com molho, cubra com muçarela.",
          "Asse a 200°C por 10 min até gratinar."
        ],
        "finalizacao": [
          "Regue com azeite e orégano. Sirva com arroz e batata frita."
        ]
      }
    ]
  },
  {
    "id": 35,
    "nome": "Ceviche de Tilápia",
    "categoria": "Peixes",
    "descricao": "Peixe curado no limão com cebola e coentro.",
    "variacoes": [
      {
        "nome": "Peruano Tradicional",
        "ingredientes": [
          "500g de filé de tilápia em cubos",
          "Suco de 8 limões",
          "1 cebola roxa fatiada fina",
          "1 pimenta dedo de moça",
          "Coentro fresco",
          "Sal e pimenta"
        ],
        "passos": [
          "Corte o peixe em cubos de 2cm.",
          "Marine com suco de limão, sal e pimenta por 15 min.",
          "Adicione cebola, pimenta e coentro.",
          "Misture gentilmente e prove o tempero."
        ],
        "finalizacao": [
          "Sirva imediatamente com milho cozido e batata doce."
        ]
      }
    ]
  },
  {
    "id": 36,
    "nome": "Ratatouille Provençal",
    "categoria": "Vegano",
    "descricao": "Legumes do sul da França refogados com ervas.",
    "variacoes": [
      {
        "nome": "Estilo Confit Byaldi",
        "ingredientes": [
          "1 abobrinha",
          "1 berinjela",
          "3 tomates",
          "1 pimentão amarelo",
          "Azeite generoso",
          "Alho, tomilho e manjericão",
          "Molho de tomate para a base"
        ],
        "passos": [
          "Fatie todos os legumes em rodelas finas.",
          "Espalhe molho de tomate no fundo da assadeira.",
          "Disponha as rodelas em leque sobrepostas.",
          "Regue com azeite, sal, alho e tomilho.",
          "Asse a 180°C por 1h30 coberto."
        ],
        "finalizacao": [
          "Sirva com folhas de manjericão e pão rústico."
        ]
      }
    ]
  },
  {
    "id": 37,
    "nome": "Bobó de Camarão",
    "categoria": "Peixes",
    "descricao": "Creme de mandioca com camarão e dendê — clássico baiano.",
    "variacoes": [
      {
        "nome": "Baiano Tradicional",
        "ingredientes": [
          "1kg de camarão médio limpo",
          "500g de mandioca cozida",
          "400ml de leite de coco",
          "3 colheres de dendê",
          "2 tomates",
          "1 pimentão",
          "Coentro e alho"
        ],
        "passos": [
          "Bata mandioca cozida com leite de coco no liquidificador.",
          "Refogue alho, pimentão e tomate no dendê.",
          "Adicione o creme de mandioca e cozinhe 10 min.",
          "Junte os camarões temprados e cozinhe mais 5 min."
        ],
        "finalizacao": [
          "Sirva com arroz branco e coentro fresco picado."
        ]
      }
    ]
  },
  {
    "id": 38,
    "nome": "Moqueca de Peixe",
    "categoria": "Peixes",
    "descricao": "Ensopado de peixe com leite de coco e dendê.",
    "variacoes": [
      {
        "nome": "Moqueca Baiana",
        "ingredientes": [
          "1kg de filé de badejo",
          "400ml de leite de coco",
          "3 colheres de dendê",
          "2 tomates em rodelas",
          "1 cebola em rodelas",
          "Pimentões coloridos e coentro"
        ],
        "passos": [
          "Marine o peixe com limão, sal e coentro por 30 min.",
          "Faça camadas na panela de barro: cebola, tomate, pimentão, peixe.",
          "Regue com leite de coco e dendê.",
          "Cozinhe tampado em fogo médio por 20 min sem mexer."
        ],
        "finalizacao": [
          "Sirva direto na panela com pirão e arroz de coco."
        ]
      },
      {
        "nome": "Moqueca Capixaba",
        "ingredientes": [
          "1kg de filé de robalo",
          "400ml de leite de coco",
          "Urucum (colorau) no lugar do dendê",
          "2 tomates",
          "1 cebola",
          "Coentro e azeite comum"
        ],
        "passos": [
          "Monte as camadas na panela de barro com urucum.",
          "Regue com leite de coco e azeite.",
          "Cozinhe tampado por 15-20 min."
        ],
        "finalizacao": [
          "A diferença é não usar dendê — versão capixaba é mais leve."
        ]
      }
    ]
  },
  {
    "id": 39,
    "nome": "Picanha na Brasa",
    "categoria": "Churrasco",
    "descricao": "Picanha suculenta com crosta de sal grosso.",
    "variacoes": [
      {
        "nome": "Tradicional com Sal Grosso",
        "ingredientes": [
          "1,2kg de picanha inteira com gordura",
          "3 colheres de sal grosso",
          "Brasa de carvão forte"
        ],
        "passos": [
          "Deixe a peça em temperatura ambiente por 30 min.",
          "Cubra toda a superfície com sal grosso pressionando.",
          "Leve à brasa forte com gordura para baixo por 8 min.",
          "Vire e grelhe por mais 6 min para ponto mal passado.",
          "Bata levemente para retirar excesso de sal."
        ],
        "finalizacao": [
          "Fatie na diagonal em fatias de 1cm e sirva imediatamente."
        ]
      }
    ]
  },
  {
    "id": 40,
    "nome": "Coxinha Caseira",
    "categoria": "Lanches",
    "descricao": "Salgado cremoso de frango no formato clássico.",
    "variacoes": [
      {
        "nome": "Com Catupiry",
        "ingredientes": [
          "500g de peito de frango cozido e desfiado",
          "200g de catupiry",
          "1 cebola",
          "Cheiro-verde",
          "Massa: 500g batata cozida, 2 xícaras farinha, 1 xícara caldo de frango",
          "Farinha de rosca e óleo para fritar"
        ],
        "passos": [
          "Refogue frango com cebola, alho e cheiro-verde. Misture catupiry.",
          "Cozinhe batata amassada com caldo, adicione farinha até soltar das mãos.",
          "Abra disco de massa, coloque recheio e modele em gota.",
          "Empane em ovo e farinha de rosca.",
          "Frite a 170°C até dourar."
        ],
        "finalizacao": [
          "Sirva quente com molho de pimenta artesanal."
        ]
      }
    ]
  },
  {
    "id": 41,
    "nome": "Pad Thai",
    "categoria": "Massas",
    "descricao": "Macarrão de arroz frito com camarão, ovo e amendoim — prato símbolo da Tailândia.",
    "variacoes": [
      {
        "nome": "Clássico com Camarão",
        "ingredientes": [
          "200g de macarrão de arroz flat",
          "200g de camarão limpo",
          "2 ovos",
          "100g de broto de feijão",
          "3 cebolinhas",
          "Molho: 3 colheres de molho de peixe, 2 de açúcar mascavo, 1 de vinagre de arroz",
          "Amendoim torrado e limão para servir"
        ],
        "passos": [
          "Hidrate o macarrão em água fria por 30 min.",
          "Salteie o camarão em wok bem quente com óleo.",
          "Afaste o camarão e faça os ovos mexidos.",
          "Adicione o macarrão escorrido e o molho.",
          "Mexa vigorosamente em fogo alto por 2 min.",
          "Adicione broto de feijão e cebolinha."
        ],
        "finalizacao": [
          "Sirva com amendoim picado, pimenta seca, açúcar e limão à parte."
        ]
      }
    ]
  },
  {
    "id": 42,
    "nome": "Butter Chicken",
    "categoria": "Frango",
    "descricao": "Frango indiano em molho cremoso de tomate e especiarias.",
    "variacoes": [
      {
        "nome": "Murgh Makhani Clássico",
        "ingredientes": [
          "800g de coxa de frango marinada em iogurte e especiarias",
          "Para o molho: 400g de tomate pelado, 100g de manteiga, 200ml de creme de leite",
          "Garam masala, cominho, coentro em pó, cardamomo",
          "Gengibre e alho frescos"
        ],
        "passos": [
          "Marine o frango em iogurte, alho, gengibre e especiarias por 4h.",
          "Grelhe ou asse o frango até ter marcas de grelha.",
          "Prepare o molho: frite alho e gengibre na manteiga.",
          "Adicione tomates e especiarias. Cozinhe 20 min.",
          "Bata o molho e coe. Adicione creme e o frango."
        ],
        "finalizacao": [
          "Sirva com arroz basmati e pão naan quentinho."
        ]
      }
    ]
  },
  {
    "id": 43,
    "nome": "Shawarma de Frango",
    "categoria": "Lanches",
    "descricao": "Wrap árabe com frango marinado em especiarias e molho de alho.",
    "variacoes": [
      {
        "nome": "Shawarma Libanês",
        "ingredientes": [
          "800g de coxa de frango em tiras",
          "Marinada: cominho, cúrcuma, canela, cardamomo, páprica, iogurte e azeite",
          "Pão pita ou sírio",
          "Molho toum (alho emulsificado)",
          "Tomate, pepino e salsa"
        ],
        "passos": [
          "Marine o frango por 4h nas especiarias e iogurte.",
          "Grelhe em chapa ou frigideira em fogo alto.",
          "Aqueça o pão pita.",
          "Monte com toum, frango, tomate, pepino e salsinha."
        ],
        "finalizacao": [
          "Embrulhe bem apertado em papel alumínio para aquecer 1 min antes de servir."
        ]
      }
    ]
  },
  {
    "id": 44,
    "nome": "Coq au Vin",
    "categoria": "Frango",
    "descricao": "Frango braseado em vinho tinto com cogumelos e cebolas pérola.",
    "variacoes": [
      {
        "nome": "Clássico Francês",
        "ingredientes": [
          "1 frango inteiro cortado",
          "750ml de vinho tinto borgonha",
          "200g de bacon em cubos",
          "300g de cogumelo paris",
          "200g de cebolas pérola",
          "Tomilho, louro e alho",
          "Manteiga e farinha"
        ],
        "passos": [
          "Marine o frango no vinho com ervas por uma noite.",
          "Doure o bacon. Reserve.",
          "Sele os pedaços de frango na gordura do bacon.",
          "Refogue alho e cebolinhas. Adicione a marinada de vinho.",
          "Cozinhe tampado em fogo baixo por 45 min.",
          "Adicione cogumelos nos últimos 15 min."
        ],
        "finalizacao": [
          "Espesse o molho com manteiga gelada. Sirva com purê de batata."
        ]
      }
    ]
  },
  {
    "id": 45,
    "nome": "Tacos al Pastor",
    "categoria": "Carnes",
    "descricao": "Tacos mexicanos com porco marinado em achiote e abacaxi.",
    "variacoes": [
      {
        "nome": "Al Pastor Tradicional",
        "ingredientes": [
          "800g de pescoço de porco em fatias",
          "Marinada: achiote, chile guajillo, laranja, vinagre, alho e cominho",
          "Tortilhas de milho",
          "Abacaxi fresco",
          "Cebola, coentro e salsa verde"
        ],
        "passos": [
          "Hidrate os chiles e bata com achiote, alho, laranja e especiarias.",
          "Marine o porco por 4h.",
          "Grelhe as fatias de porco em chapa bem quente.",
          "Pique a carne e sirva nas tortilhas aquecidas.",
          "Coloque pedaço de abacaxi grelhado por cima."
        ],
        "finalizacao": [
          "Finalize com cebola branca picada, coentro e molho verde."
        ]
      }
    ]
  },
  {
    "id": 46,
    "nome": "Tom Yum Goong",
    "categoria": "Sopas",
    "descricao": "Sopa tailandesa ácida e picante com camarão.",
    "variacoes": [
      {
        "nome": "Tom Yum Clássico",
        "ingredientes": [
          "1 litro de caldo de frango",
          "300g de camarão médio",
          "3 talos de capim-limão",
          "4 folhas de limão kaffir",
          "3 fatias de galangal (ou gengibre)",
          "Cogumelos shitake",
          "Molho de peixe, suco de limão, pasta de pimenta tailandesa e coentro"
        ],
        "passos": [
          "Ferva o caldo com capim-limão, limão kaffir e galangal por 5 min.",
          "Adicione os cogumelos e camarão.",
          "Tempere com molho de peixe, pasta de pimenta e limão.",
          "Ajuste o equilíbrio: deve ser ácido, picante e salgado em igual medida."
        ],
        "finalizacao": [
          "Finalize com coentro fresco e sirva com arroz branco."
        ]
      }
    ]
  },
  {
    "id": 47,
    "nome": "Lomo Saltado Peruano",
    "categoria": "Carnes",
    "descricao": "Salteado de carne bovina com pimenta e tomate — fusão peruana-chinesa.",
    "variacoes": [
      {
        "nome": "Lomo Saltado Clássico",
        "ingredientes": [
          "600g de contrafilé em tiras",
          "2 tomates em pétalas",
          "1 cebola roxa em pétalas",
          "2 pimentas amarelas peruanas (ají amarillo)",
          "Shoyu, vinagre e cominho",
          "Batata frita e arroz para acompanhar"
        ],
        "passos": [
          "Sele as tiras de carne em wok em fogo altíssimo por 2 min.",
          "Adicione cebola e pimenta amarela. Salteie.",
          "Junte o tomate em pétalas. Mexa 1 min.",
          "Deglaceie com shoyu e vinagre.",
          "Misture as batatas fritas na hora de servir."
        ],
        "finalizacao": [
          "Sirva com arroz branco e batatas fritas — as batatas absorvem o molho."
        ]
      }
    ]
  },
  {
    "id": 48,
    "nome": "Spanakopita",
    "categoria": "Tortas",
    "descricao": "Torta grega de espinafre e queijo feta em massa folhada.",
    "variacoes": [
      {
        "nome": "Spanakopita Tradicional",
        "ingredientes": [
          "500g de espinafre fresco",
          "250g de queijo feta",
          "2 ovos",
          "1 cebola",
          "3 talos de cebolinha",
          "Azeite e noz-moscada",
          "Massa phyllo (15-20 folhas)",
          "Manteiga derretida"
        ],
        "passos": [
          "Refogue espinafre com cebola até murchar. Esprema bem.",
          "Misture feta esfarelado, ovos, cebolinha e noz-moscada.",
          "Pincele cada folha phyllo com manteiga.",
          "Monte em assadeira alternando 8 folhas, recheio, e mais folhas.",
          "Marque losangos na superfície. Asse a 180°C por 45 min."
        ],
        "finalizacao": [
          "Sirva morna como entrada ou prato principal com salada grega."
        ]
      }
    ]
  },
  {
    "id": 49,
    "nome": "Kimchi Jjigae",
    "categoria": "Sopas",
    "descricao": "Ensopado coreano picante de kimchi com tofu e porco.",
    "variacoes": [
      {
        "nome": "Kimchi Jjigae Tradicional",
        "ingredientes": [
          "300g de kimchi fermentado (mais ácido = melhor)",
          "200g de barriga de porco em fatias",
          "300g de tofu firme em cubos",
          "1 colher de gochujang (pasta de pimenta coreana)",
          "1 colher de óleo de gergelim",
          "Caldo de anchova ou água",
          "Cebolinha e alho"
        ],
        "passos": [
          "Frite a barriga de porco e o kimchi juntos por 3 min.",
          "Adicione gochujang e alho picado.",
          "Cubra com caldo e cozinhe 15 min.",
          "Adicione o tofu e cozinhe mais 5 min.",
          "Finalize com óleo de gergelim."
        ],
        "finalizacao": [
          "Sirva em panela de barro aquecida com arroz branco e ovos."
        ]
      }
    ]
  },
  {
    "id": 50,
    "nome": "Gazpacho Andaluz",
    "categoria": "Sopas",
    "descricao": "Sopa fria espanhola de tomate e pepino — refrescante no verão.",
    "variacoes": [
      {
        "nome": "Gazpacho Tradicional",
        "ingredientes": [
          "1kg de tomate maduro",
          "1 pepino sem sementes",
          "1 pimentão verde",
          "1/2 cebola",
          "2 dentes de alho",
          "100ml de azeite extra virgem",
          "2 colheres de vinagre de Jerez",
          "Sal, pão amanhecido e água gelada"
        ],
        "passos": [
          "Mergulhe o pão em água por 5 min e esprema.",
          "Bata todos os vegetais com o pão no liquidificador.",
          "Adicione azeite em fio e vinagre. Bata mais.",
          "Coe na peneira e ajuste com água gelada até a consistência desejada.",
          "Refrigere por no mínimo 2h."
        ],
        "finalizacao": [
          "Sirva gelado com brunoise de pepino, pimentão e torradas."
        ]
      }
    ]
  },
  {
    "id": 51,
    "nome": "Pho Bo Vietnamita",
    "categoria": "Sopas",
    "descricao": "Sopa de macarrão de arroz com caldo de ossos e ervas frescas.",
    "variacoes": [
      {
        "nome": "Pho Bò Clássico",
        "ingredientes": [
          "Caldo: 2kg de ossos de boi, canela, anis, cravo, gengibre e cebola tostados, cozidos 6h",
          "200g de macarrão de arroz flat",
          "150g de contrafilé fatiado fino cru",
          "Broto de feijão, manjericão tailandês, hortelã, limão e pimenta"
        ],
        "passos": [
          "Toste a cebola e o gengibre direto na chama.",
          "Cozinhe os ossos com as especiarias por 6h. Coe e tempere com molho de peixe.",
          "Cozinhe o macarrão separadamente.",
          "Monte a tigela: macarrão, fatias de carne crua.",
          "Despeje o caldo fervendo sobre a carne — ela cozinha no calor."
        ],
        "finalizacao": [
          "Sirva com prato de ervas frescas, limão, hoisin e sriracha à parte."
        ]
      }
    ]
  },
  {
    "id": 52,
    "nome": "Pierogi Polonês",
    "categoria": "Massas",
    "descricao": "Pastéis recheados cozidos e fritos com cebola e creme azedo.",
    "variacoes": [
      {
        "nome": "Pierogi Ruskie (Batata e Queijo)",
        "ingredientes": [
          "Massa: 500g farinha, 1 ovo, 200ml água morna, sal",
          "Recheio: 500g batata cozida amassada, 200g queijo cottage, 1 cebola frita, sal e pimenta",
          "Manteiga para fritar",
          "Creme azedo e cebolinha para servir"
        ],
        "passos": [
          "Misture farinha, ovo, água e sal até virar massa elástica. Descanse 30 min.",
          "Prepare o recheio misturando batata com queijo e cebola frita.",
          "Abra a massa e corte círculos de 8cm.",
          "Recheie, feche pressionando as bordas.",
          "Cozinhe em água salgada até subirem (3-4 min). Escorra.",
          "Frite na manteiga até dourar."
        ],
        "finalizacao": [
          "Sirva com creme azedo e cebolinha picada."
        ]
      }
    ]
  },
  {
    "id": 53,
    "nome": "Jollof Rice Nigeriano",
    "categoria": "Arroz",
    "descricao": "Arroz west africano cozido em molho de tomate e pimenta defumada.",
    "variacoes": [
      {
        "nome": "Party Jollof",
        "ingredientes": [
          "3 xícaras de arroz de grão longo",
          "400g de tomate pelado",
          "2 pimentões vermelhos",
          "Pimenta scotch bonnet ou dedo de moça",
          "1 cebola grande",
          "Caldo de frango",
          "Tomilho, louro, cúrcuma e cebola em pó"
        ],
        "passos": [
          "Bata tomates, pimentões e pimenta no liquidificador.",
          "Frite cebola no óleo quente, adicione a pasta de tomate.",
          "Frite a pasta por 20-25 min mexendo até encorpar e escurecer.",
          "Adicione o arroz cru, caldo e especiarias.",
          "Tampe bem e cozinhe em fogo baixo por 30 min — o fundo deve tostar levemente."
        ],
        "finalizacao": [
          "O fundo tostado (Party Bottom) é o mais disputado — sinal de Jollof perfeito."
        ]
      }
    ]
  },
  {
    "id": 54,
    "nome": "Tagine de Cordeiro",
    "categoria": "Carnes",
    "descricao": "Ensopado marroquino com ameixas, amêndoas e especiarias.",
    "variacoes": [
      {
        "nome": "Tagine com Ameixa e Mel",
        "ingredientes": [
          "1kg de paleta de cordeiro em cubos",
          "200g de ameixa seca sem caroço",
          "50g de amêndoas laminadas",
          "1 cebola",
          "Ras el hanout, gengibre, açafrão, canela",
          "Mel, coentro e salsinha"
        ],
        "passos": [
          "Doure o cordeiro na tagine ou panela de fundo grosso.",
          "Refogue cebola, adicione especiarias.",
          "Cubra com água ou caldo e cozinhe 1h30 tampado.",
          "Adicione as ameixas e mel. Cozinhe mais 20 min.",
          "Toste as amêndoas separadamente."
        ],
        "finalizacao": [
          "Sirva com cuscuz marroquino e decore com amêndoas e coentro."
        ]
      }
    ]
  },
  {
    "id": 55,
    "nome": "Dumplings Chineses (Jiaozi)",
    "categoria": "Petiscos",
    "descricao": "Bolinhos de massa fina recheados com porco e repolho.",
    "variacoes": [
      {
        "nome": "Jiaozi Cozido com Molho de Gengibre",
        "ingredientes": [
          "Massa: 300g farinha, 150ml água quente",
          "Recheio: 300g porco moído, 2 xícaras repolho, 3 cebolinhas, shoyu, gengibre, óleo de gergelim",
          "Molho: shoyu, vinagre de arroz, óleo de gergelim, gengibre ralado"
        ],
        "passos": [
          "Misture farinha com água quente. Sove 10 min. Descanse 30 min.",
          "Sal no repolho, espere 10 min e esprema. Misture com carne.",
          "Abra a massa e corte círculos. Coloque o recheio e dobre.",
          "Cozinhe em água fervente até subirem + 3 min mais.",
          "Para fritos: cozinhe meio minuto, frite na frigideira até o fundo dourar."
        ],
        "finalizacao": [
          "Sirva com molho de vinagre e shoyu com gengibre ralado."
        ]
      }
    ]
  },
  {
    "id": 56,
    "nome": "Bibimbap Coreano",
    "categoria": "Arroz",
    "descricao": "Bowl de arroz com legumes coloridos, carne e ovo — culinária coreana.",
    "variacoes": [
      {
        "nome": "Bibimbap Tradicional",
        "ingredientes": [
          "2 xícaras de arroz japonês cozido",
          "150g de carne bovina moída marinada em shoyu e açúcar",
          "Espinafre, cenoura, cogumelo shitake, broto de feijão — cada um temperado separadamente",
          "2 ovos fritos",
          "Gochujang (pasta de pimenta coreana)",
          "Óleo de gergelim"
        ],
        "passos": [
          "Prepare cada legume separadamente: branqueie, refogue ou tempere.",
          "Refogue a carne marinada até caramelizar.",
          "Monte em tigela: arroz no fundo, legumes em setores coloridos.",
          "Coloque o ovo frito no centro.",
          "Fio de óleo de gergelim e colher de gochujang."
        ],
        "finalizacao": [
          "Misture tudo vigorosamente antes de comer — o nome 'bibimbap' significa 'arroz misturado'."
        ]
      }
    ]
  },
  {
    "id": 57,
    "nome": "Crème Brûlée",
    "categoria": "Sobremesas",
    "descricao": "Creme de baunilha com casquinha de açúcar caramelizado.",
    "variacoes": [
      {
        "nome": "Crème Brûlée Clássico",
        "ingredientes": [
          "500ml de creme de leite fresco",
          "6 gemas",
          "100g de açúcar",
          "1 fava de baunilha",
          "Açúcar refinado para caramelizar"
        ],
        "passos": [
          "Ferva o creme com a fava de baunilha. Deixe infusionar 10 min.",
          "Bata gemas com açúcar até ficar pálido.",
          "Despeje o creme quente sobre as gemas mexendo sempre.",
          "Coe e distribua em ramequins.",
          "Asse em banho-maria a 150°C por 45-50 min.",
          "Refrigere 2h. Polvilhe açúcar e flambe com maçarico."
        ],
        "finalizacao": [
          "A casca deve estalar ao partir com a colher — esse é o momento perfeito."
        ]
      }
    ]
  },
  {
    "id": 58,
    "nome": "Feijão Tropeiro Mineiro",
    "categoria": "Regional",
    "descricao": "Feijão com farinha, bacon e couve — patrimônio de Minas.",
    "variacoes": [
      {
        "nome": "Tropeiro Tradicional",
        "ingredientes": [
          "2 xícaras de feijão carioca cozido e escorrido",
          "200g de bacon em cubos",
          "200g de linguiça calabresa fatiada",
          "3 ovos",
          "2 xícaras de farinha de mandioca torrada",
          "1 cebola",
          "Couve, sal e cheiro-verde"
        ],
        "passos": [
          "Frite o bacon até crocante e reserve.",
          "Frite a linguiça e a cebola na mesma gordura.",
          "Adicione o feijão escorrido e refogue bem.",
          "Quebre os ovos e mexa incorporando ao feijão.",
          "Misture a farinha aos poucos e adicione a couve fatiada fina.",
          "Finalize com o bacon crocante por cima."
        ],
        "finalizacao": [
          "Sirva com arroz branco, costelinha e torresmo na hora."
        ]
      }
    ]
  },
  {
    "id": 59,
    "nome": "Green Curry Tailandês",
    "categoria": "Frango",
    "descricao": "Curry tailandês aromático com leite de coco e manjericão.",
    "variacoes": [
      {
        "nome": "Gaeng Keow Wan Gai",
        "ingredientes": [
          "600g de coxa de frango sem osso",
          "400ml de leite de coco",
          "2 colheres de pasta de curry verde",
          "200g de berinjela tailandesa",
          "1 pimentão vermelho",
          "Folhas de limão kaffir",
          "Molho de peixe, açúcar de palma e manjericão tailandês"
        ],
        "passos": [
          "Frite a pasta de curry no leite de coco espesso por 2 min.",
          "Adicione o frango e sele levemente.",
          "Adicione o restante do leite de coco e os legumes.",
          "Tempere com molho de peixe e açúcar de palma.",
          "Cozinhe 15-20 min até o frango ficar macio.",
          "Finalize com folhas de limão kaffir e manjericão."
        ],
        "finalizacao": [
          "Sirva com arroz de jasmim e pimenta fresca fatiada."
        ]
      }
    ]
  },
  {
    "id": 60,
    "nome": "Pão de Queijo Mineiro",
    "categoria": "Café da Manhã",
    "descricao": "Bolinho crocante por fora e elástico por dentro, com queijo meia cura.",
    "variacoes": [
      {
        "nome": "Tradicional com Polvilho Azedo",
        "ingredientes": [
          "500g de polvilho azedo",
          "150ml de óleo",
          "150ml de leite integral",
          "2 ovos",
          "200g de queijo meia cura ralado",
          "1 colher de sal"
        ],
        "passos": [
          "Ferva o leite com o óleo e despeje sobre o polvilho mexendo.",
          "Deixe amornar e adicione os ovos um a um.",
          "Incorpore o queijo e o sal amassando bem.",
          "Molde bolinhas e asse em forma untada.",
          "Asse a 180°C por 25-30 min até dourar."
        ],
        "finalizacao": [
          "Sirva quentinho — eles murcham se esfriarem antes de comer."
        ]
      },
      {
        "nome": "Com Parmesão e Alecrim",
        "ingredientes": [
          "500g de polvilho azedo",
          "150ml de leite",
          "150ml de óleo",
          "2 ovos",
          "150g de parmesão ralado fino",
          "50g de queijo coalho",
          "Alecrim fresco picado e sal"
        ],
        "passos": [
          "Escalde o polvilho com leite e óleo fervendo.",
          "Amorne, adicione ovos, queijos, alecrim e sal.",
          "Sove até a massa ficar homogênea.",
          "Modele e asse a 190°C por 30 min."
        ],
        "finalizacao": [
          "Sirva com manteiga de ervas e café com leite."
        ]
      }
    ]
  }
];
