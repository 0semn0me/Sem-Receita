        const bancoDeDados = [
            {
                id: 1, nome: "Pudim de Leite", categoria: "Doces", descricao: "Clássico liso, cremoso e sem furinhos.",
                variacoes: [
                                {
                id: 111, nome: "Estrogonofe de Carne", categoria: "Carnes", descricao: "O clássico das festas brasileiras, cremoso e reconfortante.",
                variacoes: [
                    {
                        nome: "Estilo Clássico Brasileiro",
                        ingredientes: ["500g de Alcatra em tiras", "1 cebola picada", "200g de Cogumelos (Champignon)", "200g de Creme de Leite", "2 colheres de Mostarda", "1 colher de Molho Inglês"],
                        passos: ["Sele a carne em fogo alto.", "Refogue a cebola e os cogumelos.", "Adicione a mostarda e molho inglês.", "Desligue o fogo e misture o creme de leite."],
                        finalizacao: ["Sirva com arroz branco e batata palha."]
                    }
                ]
            },
            {
                id: 112, nome: "Yakisoba", categoria: "Massas", descricao: "Macarrão frito oriental com vegetais crocantes.",
                variacoes: [
                    {
                        nome: "Tradicional de Frango",
                        ingredientes: ["200g de macarrão para Yakisoba", "200g de peito de frango", "1 cenoura, 1 brócolis, acelga", "Shoyu, óleo de gergelim, amido de milho"],
                        passos: ["Refogue o frango. Adicione os vegetais.", "Misture o macarrão cozido.", "Finalize com o molho (shoyu + amido)."],
                        finalizacao: ["Gergelim torrado por cima."]
                    }
                ]
            },
            {
                id: 113, nome: "Brigadeiro Gourmet", categoria: "Doces", descricao: "A evolução do clássico nacional com chocolate nobre.",
                variacoes: [
                    {
                        nome: "Meio Amargo com Pistache",
                        ingredientes: ["1 lata de leite condensado", "1 caixinha de creme de leite", "100g de chocolate 50% cacau", "Pistache picado"],
                        passos: ["Leve ao fogo até o ponto de enrolar.", "Deixe esfriar completamente.", "Enrole e passe no pistache triturado."],
                        finalizacao: ["Coloque em forminhas luxuosas."]
                    }
                ]
            },
            {
                id: 114, nome: "Risoto de Funghi", categoria: "Arroz", descricao: "Sofisticado e terroso, um prato italiano que impressiona.",
                variacoes: [
                    {
                        nome: "Clássico",
                        ingredientes: ["200g de arroz arbóreo", "50g de funghi secchi", "Caldo de legumes", "Vinho branco seco", "Parmesão, Manteiga"],
                        passos: ["Hidrate o funghi.", "Refogue o arroz, deglaceie com vinho.", "Adicione o caldo aos poucos, mexendo sempre.", "Finalize com manteiga gelada e parmesão."],
                        finalizacao: ["Sirva imediatamente para manter a textura."]
                    }
                ]
            },
            {
                id: 115, nome: "Guacamole", categoria: "Lanches", descricao: "Dip mexicano fresco e nutritivo.",
                variacoes: [
                    {
                        nome: "Autêntica",
                        ingredientes: ["2 abacates maduros", "1 tomate picado", "1/2 cebola roxa", "Suco de limão", "Coentro fresco"],
                        passos: ["Amasse o abacate grosseiramente.", "Misture os demais ingredientes.", "Tempere com sal e pimenta."],
                        finalizacao: ["Sirva com nachos de milho."]
                    }
                ]
            },
            {
                id: 116, nome: "Moussaka", categoria: "Carnes", descricao: "A lasanha grega feita com berinjela.",
                variacoes: [
                    {
                        nome: "Tradicional",
                        ingredientes: ["2 berinjelas fatiadas", "500g de carne moída", "Molho de tomate", "Molho bechamel", "Queijo parmesão"],
                        passos: ["Grelhe as fatias de berinjela.", "Monte camadas: berinjela, carne, molho.", "Cubra com bechamel e leve ao forno."],
                        finalizacao: ["Gratine até dourar."]
                    }
                ]
            },
            {
                id: 117, nome: "Sushi Caseiro", categoria: "Peixes", descricao: "A arte japonesa simplificada para sua casa.",
                variacoes: [
                    {
                        nome: "Hossomaki de Salmão",
                        ingredientes: ["Arroz para sushi", "Alga nori", "Salmão fresco", "Vinagre de arroz, açúcar, sal"],
                        passos: ["Tempere o arroz cozido.", "Espalhe na alga.", "Adicione o salmão e enrole com a esteira."],
                        finalizacao: ["Corte em 6 pedaços iguais."]
                    }
                ]
            },
            {
                id: 118, nome: "Bacalhau à Gomes de Sá", categoria: "Peixes", descricao: "Receita portuguesa clássica e reconfortante.",
                variacoes: [
                    {
                        nome: "Tradicional",
                        ingredientes: ["500g de bacalhau em lascas", "Batatas cozidas", "Ovos cozidos", "Azeitonas pretas", "Cebola, azeite extra virgem"],
                        passos: ["Desfie o bacalhau.", "Refogue no azeite com muita cebola.", "Misture as batatas cozidas."],
                        finalizacao: ["Decore com ovos cozidos e azeitonas."]
                    }
                ]
            },
            {
                id: 119, nome: "Frango Xadrez", categoria: "Aves", descricao: "Um clássico chinês adaptado para o dia a dia.",
                variacoes: [
                    {
                        nome: "Com Amendoim",
                        ingredientes: ["500g de peito de frango", "1 pimentão verde", "1 pimentão vermelho", "Cebola", "Amendoim torrado"],
                        passos: ["Refogue o frango em cubos.", "Adicione os vegetais.", "Finalize com shoyu e amendoim."],
                        finalizacao: ["Sirva quente com arroz."]
                    }
                ]
            },
            {
                id: 120, nome: "Sopa de Cebola", categoria: "Sopas", descricao: "Caldo francês intenso, gratinado com queijo.",
                variacoes: [
                    {
                        nome: "Gratinada",
                        ingredientes: ["1kg de cebola fatiada", "Caldo de carne", "Pão amanhecido", "Queijo Gruyère ou Muçarela"],
                        passos: ["Caramelize a cebola por 30min.", "Adicione o caldo e ferva.", "Coloque o pão, cubra com queijo e leve ao forno."],
                        finalizacao: ["Sirva borbulhando."]
                    }
                ]
            },
            {
                id: 121, nome: "Tiramisu", categoria: "Doces", descricao: "Sobremesa italiana de café e mascarpone.",
                variacoes: [
                    {
                        nome: "Clássico",
                        ingredientes: ["Queijo Mascarpone", "Café forte", "Biscoito Champanhe", "Cacau em pó", "Ovos, açúcar"],
                        passos: ["Bata o mascarpone com ovos e açúcar.", "Molhe o biscoito no café.", "Monte camadas e leve à geladeira."],
                        finalizacao: ["Polvilhe cacau antes de servir."]
                    }
                ]
            },
            {
                id: 122, nome: "Hummus", categoria: "Lanches", descricao: "Pasta de grão de bico do Oriente Médio.",
                variacoes: [
                    {
                        nome: "Com Tahine",
                        ingredientes: ["Grão de bico cozido", "Tahine", "Alho", "Suco de limão", "Azeite"],
                        passos: ["Bata tudo no processador até ficar liso."],
                        finalizacao: ["Regue com azeite e páprica."]
                    }
                ]
            },
            {
                id: 123, nome: "Shakshuka", categoria: "Vegetariano", descricao: "Ovos pochê em molho de tomate temperado.",
                variacoes: [
                    {
                        nome: "Picante",
                        ingredientes: ["4 ovos", "Molho de tomate", "Pimentão, cebola, alho", "Cominho, páprica"],
                        passos: ["Refogue os temperos e tomate.", "Faça covas e quebre os ovos dentro.", "Tampe até cozinhar."],
                        finalizacao: ["Coentro fresco."]
                    }
                ]
            },
            {
                id: 124, nome: "Curry de Grão de Bico", categoria: "Vegetariano", descricao: "Vegano e extremamente aromático.",
                variacoes: [
                    {
                        nome: "Ao Leite de Coco",
                        ingredientes: ["Grão de bico", "Leite de coco", "Curry em pó", "Espinafre"],
                        passos: ["Refogue o curry.", "Adicione o leite de coco e grão de bico.", "Finalize com espinafre."],
                        finalizacao: ["Sirva com arroz."]
                    }
                ]
            },
            {
                id: 125, nome: "Chili com Carne", categoria: "Carnes", descricao: "Prato tex-mex rico e apimentado.",
                variacoes: [
                    {
                        nome: "Com Feijão",
                        ingredientes: ["500g de carne moída", "Feijão carioquinha", "Tomate, cebola", "Pimenta dedo de moça"],
                        passos: ["Refogue a carne com temperos.", "Adicione o feijão e molho.", "Deixe apurar."],
                        finalizacao: ["Cebolinha picada."]
                    }
                ]
            },
            {
                id: 126, nome: "Paella", categoria: "Arroz", descricao: "O prato espanhol de frutos do mar.",
                variacoes: [
                    {
                        nome: "Mista",
                        ingredientes: ["Arroz bomba", "Camarão, lula, marisco", "Açafrão", "Ervilhas, pimentão"],
                        passos: ["Refogue os frutos do mar.", "Adicione arroz e caldo com açafrão.", "Cozinhe até secar."],
                        finalizacao: ["Decore com limão."]
                    }
                ]
            },
            {
                id: 127, nome: "Bolo de Rolo", categoria: "Doces", descricao: "Patrimônio cultural de Pernambuco.",
                variacoes: [
                    {
                        nome: "Goiabada",
                        ingredientes: ["Massa fina de bolo", "Goiabada derretida"],
                        passos: ["Asse camadas finíssimas.", "Passe a goiabada e enrole."],
                        finalizacao: ["Açúcar polvilhado."]
                    }
                ]
            },
            {
                id: 128, nome: "Panqueca Americana", categoria: "Lanches", descricao: "Fofas e perfeitas para o café da manhã.",
                variacoes: [
                    {
                        nome: "Com Mel",
                        ingredientes: ["Farinha, leite, ovo", "Fermento", "Mel ou Maple syrup"],
                        passos: ["Misture a massa.", "Frite em frigideira antiaderente.", "Empilhe."],
                        finalizacao: ["Mel por cima."]
                    }
                ]
            },
            {
                id: 129, nome: "Salmão ao Maracujá", categoria: "Peixes", descricao: "Contraste perfeito entre gordura e acidez.",
                variacoes: [
                    {
                        nome: "Grelhado",
                        ingredientes: ["Filé de salmão", "Suco de maracujá concentrado", "Açúcar"],
                        passos: ["Grelhe o salmão.", "Reduza o suco com açúcar.", "Cubra o peixe."],
                        finalizacao: ["Sementes de maracujá."]
                    }
                ]
            },
            {
                id: 130, nome: "Carne de Panela", categoria: "Carnes", descricao: "Aquele clássico de domingo que desmancha.",
                variacoes: [
                    {
                        nome: "Com Batatas",
                        ingredientes: ["Acém ou músculo", "Batatas", "Cenoura", "Cebola, alho"],
                        passos: ["Selle a carne na pressão.", "Adicione legumes e água.", "Cozinhe até amaciar."],
                        finalizacao: ["Salsinha fresca."]
                    }
                ]
            },
            {
                id: 131, nome: "Fettuccine Alfredo", categoria: "Massas", descricao: "Simplicidade pura em forma de massa.",
                variacoes: [
                    {
                        nome: "Original",
                        ingredientes: ["Fettuccine", "Manteiga", "Parmesão"],
                        passos: ["Cozinhe a massa.", "Misture manteiga e parmesão com um pouco da água do cozimento.", "Crie um creme."],
                        finalizacao: ["Pimenta preta."]
                    }
                ]
            },
            {
                id: 132, nome: "Falafel", categoria: "Lanches", descricao: "Bolinho de grão de bico frito.",
                variacoes: [
                    {
                        nome: "Tradicional",
                        ingredientes: ["Grão de bico cru (hidratado)", "Salsinha, coentro", "Cominho, alho"],
                        passos: ["Processe tudo.", "Modele bolinhos.", "Frite."],
                        finalizacao: ["Molho de tahine."]
                    }
                ]
            },
            {
                id: 133, nome: "Bobó de Camarão", categoria: "Peixes", descricao: "Creme de mandioca com camarão.",
                variacoes: [
                    {
                        nome: "Baiano",
                        ingredientes: ["Camarões", "Mandioca cozida", "Leite de coco", "Azeite de dendê"],
                        passos: ["Bata a mandioca com leite de coco.", "Refogue camarões.", "Misture tudo com dendê."],
                        finalizacao: ["Coentro."]
                    }
                ]
            },
            {
                id: 134, nome: "Galinhada", categoria: "Arroz", descricao: "Arroz bem temperado com frango.",
                variacoes: [
                    {
                        nome: "Com Pequi",
                        ingredientes: ["Frango, arroz", "Pequi", "Açafrão", "Cheiro verde"],
                        passos: ["Refogue o frango.", "Adicione o pequi e arroz.", "Cozinhe tudo junto."],
                        finalizacao: ["Cheiro verde."]
                    }
                ]
            },
            {
                id: 135, nome: "Quiche de Alho Poró", categoria: "Vegetariano", descricao: "Massa podre com recheio cremoso.",
                variacoes: [
                    {
                        nome: "Lorraine",
                        ingredientes: ["Massa folhada", "Alho poró", "Creme de leite", "Ovos"],
                        passos: ["Refogue o alho poró.", "Misture com ovos e creme.", "Asse na massa."],
                        finalizacao: ["Queijo gratinado."]
                    }
                ]
            },
            {
                id: 136, nome: "Fondue de Queijo", categoria: "Lanches", descricao: "Para compartilhar em noites frias.",
                variacoes: [
                    {
                        nome: "Suíço",
                        ingredientes: ["Queijo Gruyère", "Queijo Emmental", "Vinho branco", "Alho"],
                        passos: ["Esfregue alho na panela.", "Derreta os queijos com vinho.", "Mantenha aquecido."],
                        finalizacao: ["Pão em cubos."]
                    }
                ]
            },
            {
                id: 137, nome: "Mousse de Chocolate", categoria: "Doces", descricao: "Leve e aerada.",
                variacoes: [
                    {
                        nome: "Clássica",
                        ingredientes: ["Chocolate 70%", "Ovos (claras em neve)", "Açúcar"],
                        passos: ["Derreta o chocolate.", "Misture as gemas.", "Incorpore as claras em neve delicadamente."],
                        finalizacao: ["Raspas de chocolate."]
                    }
                ]
            },
            {
                id: 138, nome: "Bife à Parmegiana", categoria: "Carnes", descricao: "O prato que todo mundo ama.",
                variacoes: [
                    {
                        nome: "Clássico",
                        ingredientes: ["Filé mignon empanado", "Molho de tomate", "Muçarela"],
                        passos: ["Frite o bife empanado.", "Cubra com molho e queijo.", "Leve ao forno."],
                        finalizacao: ["Orégano."]
                    }
                ]
            },
            {
                id: 139, nome: "Ceviche de Tilápia", categoria: "Peixes", descricao: "Refrescante e ácido.",
                variacoes: [
                    {
                        nome: "Simples",
                        ingredientes: ["Filé de tilápia", "Limão", "Cebola roxa", "Coentro"],
                        passos: ["Corte o peixe.", "Marine no limão por 15min.", "Adicione os temperos."],
                        finalizacao: ["Pimenta dedo de moça."]
                    }
                ]
            },
            {
                id: 140, nome: "Ratatouille", categoria: "Vegetariano", descricao: "Legumes provençais.",
                variacoes: [
                    {
                        nome: "Cozido",
                        ingredientes: ["Abobrinha, berinjela, tomate", "Ervas de provence", "Azeite"],
                        passos: ["Corte em rodelas.", "Refogue tudo junto.", "Cozinhe até macio."],
                        finalizacao: ["Manjericão."]
                    }
                ]
            },
            {
                        nome: "Receita Tradicional da Vovó",
                        ingredientes: ["1 lata de Leite condensado", "1 medida de Leite integral", "3 unidades de Ovos inteiros"],
                        passos: ["Bata tudo no liquidificador por 5 minutos.", "Passe a mistura numa peneira fina para tirar as bolhas.", "Asse em banho-maria a 180°C por 1h30."],
                        finalizacao: ["Deixe gelar por 4 horas antes de desenformar."]
                    },
                    {
                        nome: "Modo Gourmet / Rápido",
                        ingredientes: ["1 lata de Leite condensado", "1 caixinha de Creme de Leite", "3 Ovos", "1 colher de essência de Baunilha"],
                        passos: ["Misture tudo delicadamente com um fouet para não criar ar.", "Despeje na forma caramelizada.", "Leve ao micro-ondas em potência média por 9 minutos."],
                        finalizacao: ["Esfrie e gele por 2 horas."]
                    }
                ]
            },
            {
                id: 2, nome: "Bolo de Cenoura", categoria: "Doces", descricao: "Massa fofinha com aquela cobertura crocante de chocolate.",
                variacoes: [
                    {
                        nome: "Com Calda de Brigadeiro Vulcão",
                        ingredientes: ["3 Cenouras médias", "3 Ovos", "1 xícara de Óleo", "2 xícaras de Açúcar", "2 xícaras de Farinha", "1 colher de Fermento"],
                        passos: ["Bata a cenoura, ovos e óleo no liquidificador.", "Misture o açúcar e a farinha à mão.", "Asse por 40 minutos a 180°C e cubra com brigadeiro mole."],
                        finalizacao: ["Sirva ainda morno para o brigadeiro escorrer."]
                    }
                ]
            },
            {
                id: 3, nome: "Lasanha Bolonhesa", categoria: "Massas", descricao: "Camadas perfeitas de massa, molho de carne e muito queijo.",
                variacoes: [
                    {
                        nome: "Massa Direta ao Forno",
                        ingredientes: ["500g de Massa de Lasanha direto ao forno", "500g de Patinho moído", "2 sachês de Molho de Tomate", "400g de Presunto", "400g de Muçarela"],
                        passos: ["Faça um molho bolonhesa bem suculento e caprichado.", "Monte em camadas alternando molho, massa, presunto e queijo.", "Cubra com papel alumínio e asse por 30 minutos."],
                        finalizacao: ["Retire o alumínio nos últimos 10 minutos para gratinar."]
                    }
                ]
            },
            {
                id: 4, nome: "Feijoada Completa", categoria: "Carnes", descricao: "Feijão preto bem apurado com carnes selecionadas.",
                variacoes: [
                    {
                        nome: "Tradicional com Pertences",
                        ingredientes: ["1kg de Feijão Preto", "500g de Carne Seca", "300g de Costelinha de Porco", "200g de Paio", "200g de Calabresa"],
                        passos: ["Dessalgue as carnes por 24 horas trocando a água.", "Cozinhe o feijão com as carnes duras primeiro.", "Adicione os embutidos e deixe o caldo engrossar bem."],
                        finalizacao: ["Sirva acompanhado de couve refogada, farofa e laranja."]
                    }
                ]
            },
            {
                id: 5, nome: "Frango Grelhado", categoria: "Carnes", descricao: "Filé de frango dourado, suculento e muito bem temperado.",
                variacoes: [
                    {
                        nome: "Marinado no Limão e Ervas",
                        ingredientes: ["500g de Filé de peito de frango", "Suco de 1 Limão", "2 dentes de Alho amassados", "Ervas finas secas", "1 colher de Azeite"],
                        passos: ["Deixe o frango na marinada por pelo menos 20 minutos.", "Aqueça bem uma frigideira antiaderente com um fio de azeite.", "Grelhe por 4 minutos de cada lado sem ficar mexendo."],
                        finalizacao: ["Deixe descansar 2 minutos antes de cortar para reter o suco."]
                    }
                ]
            },
            {
                id: 6, nome: "Tapioca Recheada", categoria: "Lanches", descricao: "Goma de mandioca tostada na medida certa.",
                variacoes: [
                    {
                        nome: "Manteiga de Garrafa e Queijo Coalho",
                        ingredientes: ["2 xícaras de Goma de Tapioca hidratada", "150g de Queijo Coalho ralado", "2 colheres de Manteiga de Garrafa"],
                        passos: ["Peneire a goma direto na frigideira fria.", "Ligue o fogo e espere a massa unir.", "Vire, coloque o queijo coalho e feche regando com a manteiga."],
                        finalizacao: ["Sirva imediatamente bem quentinha."]
                    }
                ]
            },
            {
                id: 7, nome: "Arroz de Carreteiro", categoria: "Arroz", descricao: "Arroz campeiro bem temperado e soltinho.",
                variacoes: [
                    {
                        nome: "Com Sobras de Churrasco",
                        ingredientes: ["2 xícaras de Arroz", "400g de Sobras de churrasco picadas", "1 Cebola grande", "2 dentes de Alho", "Cheiro-verde picado"],
                        passos: ["Frite as carnes picadas até dourarem.", "Refogue a cebola e o alho na mesma gordura.", "Adicione o arroz, frite um pouco e cozinhe com água quente."],
                        finalizacao: ["Finalize com bastante cheiro-verde por cima."]
                    }
                ]
            }
        ];
