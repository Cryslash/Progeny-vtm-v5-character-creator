const ptbr = {

  ui: {
    sidebar: {
      generation: "Geração",
      predatorType: "Tipo de Predador",
      sire: "Senhor",
      ambition: "Ambição",
      desire: "Desejo",
      touchstones: "Pilares",
      meritsAndFlaws: "Qualidades e Defeitos",
    },
    asideBar: {
    intro: "Introdução",
    final: "Final",
      steps: {
        clan: "Clã",
        attributes: "Atributos",
        skills: "Habilidades",
        generation: "Geração",
        predatorType: "Tipo de Predador",
        name: "Nome",
        disciplines: "Disciplinas",
        rituals: "Rituais",
        touchstones: "Pilares",
        merits: "Antecedentes",
      },
    },
    intro: {
      title: "Esta é uma ferramenta de criação de personagens de 'Vampiro: A Máscara' 5ª Edição para iniciantes",
      description1:
        "Ela foi propositalmente simplificada e limitada para criar um tipo comum de personagem, seguindo as regras do livro básico.",
      description2:
        "Você pode baixar seu personagem em um PDF imprimível quando terminar (modelo de PDF gentilmente fornecido por Nerdbert) e também salvá-lo em um arquivo local para continuar editando depois.",
      warning:
        "Nenhum dos seus dados será enviado ou armazenado em servidor algum, portanto, você pode perder seu personagem se não fizer o download!",
      feedback:
        "Para sugestões de recursos, relatórios de bugs ou feedback em geral, envie uma mensagem para mim em:",
      getStarted: "Começar!",
      loadFromFile: "Carregar um arquivo",
      viewSource: "Ver código-fonte",
      support: "Apoie-me no Ko-Fi",
      website: "Visitar meu site",
    },
    attributesSelection: {
      strongest: "Escolha seu <b>atributo mais forte</b>! (nível 4)",
      weakest: "Escolha seu <b>atributo mais fraco</b>! (nível 1)",
      medium_singular: "Escolha <b>{{count}} atributo mediano</b>! (nível 3)",
      medium_plural: "Escolha <b>{{count}} atributos medianos</b>! (nível 3)",
      remaining: "Os atributos restantes ficarão no nível 2",
      title: "Atributos",
    },
    clanPicker: {
      title: "Clã",
      pickYourClan: "Escolha seu <b>Clã</b>",
      rulers: "Governantes e Comandantes",
      fighters: "Lutadores e Protetores",
      seducers: "Sedutores e Enganadores",
      investigators: "Investigadores e Pesquisadores",
      hidden: "Espreitadores Ocultos",
      advanced: "Clãs Avançados e Especiais",

      resetDisciplinesTitle: "Disciplinas Redefinidas",
      resetDisciplinesMessage: "Porque você mudou de clã",

      resetMeritsTitle: "Méritos Redefinidos (parcialmente)",
      resetMeritsMessage: "Porque você mudou de clã",
    },    
    skillsSelection: {
      title: "Habilidades",
      pickYourDistribution: "Escolha sua <b>Distribuição de Habilidades</b>",
      distributions: {
        "Jack of All Trades": "Pau pra Toda Obra",
        Balanced: "Equilibrado",
        Specialist: "Especialista",
      },
      distributionDescriptions: {
        jackOfAllTrades: "Razoável em muitas coisas, bom em nenhuma (1/8/10)",
        balanced: "Escolha padrão recomendada (3/5/7)",
        specialist: "Excelente em algo, ruim no resto (1/3/3/3)",
      },
      categories: {
        physical: "Físicas",
        social: "Sociais",
        mental: "Mentais",
      },
      pickSpecial: "Escolha sua <b>especialidade</b> (nível 4)",
      pickStrongest: "Escolha suas <b>%count%</b> melhores habilidades (nível 3)",
      pickDecent: "Escolha <b>%count%</b> habilidades em que você é <b>razoável</b> (nível 2)",
      pickAcceptable: "Escolha <b>%count%</b> habilidades em que você é <b>mediano</b> (nível 1)",

      specialtyModal: {
        title: "Especializações",
        description1:
          "Especializações são habilidades adicionais que se aplicam a alguns usos de uma perícia (ex: Performance: Dança).",
        description2:
          "Uma especialização não deve ser tão ampla que se aplique à maioria dos usos da perícia.",
        selectSkill: "Escolha uma Perícia para uma Especialização gratuita",
        pickOne: "Escolha uma",
        noOptions: "Nenhuma opção disponível",
        back: "Voltar",
        confirm: "Confirmar",
      },      
    },    
    generation: {
      title: "Escolha sua <b>Geração</b>",
      thinbloodNote: "Os Sangue Ralo são de geração alta, portanto você deve escolher 14.",
      commonChoice: "A escolha mais comum é '13 - Neófito'.",
      header: "Geração",
      label: "Quando você foi abraçado?",
      placeholder: "Escolha uma opção",
      confirm: "Confirmar",
      options: {
        "14": "14: Criança da Noite — Há pouco tempo",
        "13": "13: Neófito — Já faz um tempo",
        "12": "12: Neófito — Já faz um tempo",
        "11": "11: Ancilla — Mal me lembro",
        "10": "10: Ancilla — Mal me lembro",
      },
    },
    predatorType: {
        question: "Como você <b>obtém sangue?</b>",
        header: "Tipo de Predador",
        thinbloodsTitle: "Sangue Ralos",
        thinbloodsDescription: "não possuem um tipo de predador.",
        continue: "Continuar",
        categories: {
          violent: "Violento",
          sociable: "Sociável",
          stealth: "Furtivo",
          excludingMortals: "Evitando Mortais",
        },
    },
    predatorTypeModal: {
      description: "Este tipo de predador concede os seguintes benefícios e perdições",
      bloodPotency: "Alteração na Potência de Sangue:",
      humanityChange: "Alteração na Humanidade:",
      meritsAndFlaws: "Qualidades e Defeitos:",
      level: "Nível",
      pickPoints: "Escolha {{total}} ponto(s) entre:",
      remaining: "Restantes:",
      selectSpecialty: "Selecione uma especialização de habilidade",
      bonusDiscipline: "Escolha uma disciplina para receber um nível bônus",
      back: "Voltar",
      confirm: "Confirmar",
    },
    basics: {
      title: "Crie as informações básicas",
      name: {
        label: "Nome completo",
        placeholder: "Erika Mustermann",
      },
      sire: {
        label: "Senhor",
        placeholder: "Seu senhor",
        description: "O vampiro que o transformou",
      },
      ambition: {
        label: "Sua ambição de longo prazo",
        placeholder: "Libertar-me do controle do meu criador",
      },
      desire: {
        label: "Seu desejo de curto prazo",
        placeholder: "Envergonhar meu rival na corte",
      },
      description: {
        label: "Descrição e aparência do personagem",
        placeholder: "Jovem músico de rock alternativo com jaqueta de couro sintético preta e cabelos longos e escuros",
      },
      confirm: "Confirmar",
    },
    disciplinesPicker: {
      title: "Disciplinas",
      level: "Nv",
      levelShort: "Nv",
      requires: "Requer:",
      requirementsMet: "Requisitos atendidos",
      take: "Escolher",
      undoLastPick: "Desfazer última escolha",
      undoPredPick: "Desfazer escolha do predador",
      thinBloods: "Sangues-ralos",
      doNotPickDisciplines: "não escolhem disciplinas",
      gainFromResonance: "você as adquire por ressonância de sangue",
      pickInstructions: {
        line1: "Escolha 2 poderes em uma disciplina,",
        line2: "1 poder em outra,",
        line3: "e 1 poder em {{predatorType}} do seu Tipo de Predador"
      },
      predatorTypeDiscipline: "Disciplina do Tipo de Predador",
    },
    ritualsPicker: {
      pickFreeRitual: "Escolha 1 Ritual gratuito",
      title: "Rituais",
      takeRitual: "Escolher {{name}}",
      level: "Nv {{level}}",
    },
    common: {
      confirm: "Confirmar",
      continue: "Continuar",
      cancel: "Cancelar"
    },
    touchstonePicker: {
      title: "Escolha seus Pilares & Convicções",
      subtitle: {
        line1: "Os Pilares são humanos em sua vida que o ligam à sua humanidade.",
        line2: "Conecte uma convicção a cada relacionamento.",
      },
      sectionTitle: "Pilares",
      name: {
        label: "Nome do Pilar",
        placeholder: "Ex: João Silva",
      },
      conviction: {
        label: "Convicção",
        placeholder: "Nunca traia seus amigos",
      },
      description: {
        label: "Descrição",
        placeholder: "Seu amigo de infância com quem você prometeu sempre estar presente.",
      },
      remove: "Remover",
      add: "Adicionar Pilar",
      confirm: "Confirmar",
    },
    meritsAndFlawsPicker: {      
      remainingPoints: "Pontos de Vantagem restantes: {{merits}}<br/>Pontos de Defeito restantes: {{flaws}}",
      tabMeritsAndFlaws: "Vantagens e Defeitos",
      tabLoresheets: "Loresheets (opcional e avançado)",
      thinbloodInstructionTitle: "Escolha Defeitos de Sangue Ralo para ganhar pontos de Mérito de Sangue Ralo",
      thinbloodPoints: "Pontos disponíveis: {{points}}",
      thinbloodBalanceWarning: "É necessário equilibrar os pontos de Méritos e Defeitos de Sangue Ralo",
      confirmButton: "Confirmar",
      thinbloodMeritsTitle: "Méritos de Sangue Ralo",
      thinbloodFlawsTitle: "Defeitos de Sangue Ralo",
      alreadyInPredatorType: "Já incluído no Tipo de Predador",
      unpickButton: "Remover seleção",
    },
    final: {
      creationComplete: "Criação de personagem concluída",
      exportInstructions:
        "Agora você pode exportar para um PDF imprimível ou baixar seu personagem como um arquivo JSON, que poderá ser recarregado posteriormente para continuar editando.",
      feedbackMessage: "Para enviar sugestões, relatar erros ou compartilhar feedback, entre em contato comigo em:",      
      downloadPdf: "Baixar PDF",
      downloadJson: "Baixar JSON",
      exportTo: "Exportar para...",
      support: "Apoie-me no Ko-Fi",
      reset: "Reiniciar",
      downloadError: "Ocorreu um erro ao baixar",
      sendScreenshot: "Envie uma captura de tela para mim no",
      refreshWarning: "Você pode precisar atualizar o navegador para permitir múltiplos downloads!",
      exportModalTitle: "Exportar para outras plataformas",
      exportModalDescription: "O Progeny pode exportar arquivos compatíveis com as seguintes plataformas:",
      foundryDescription: "Use seu personagem no Foundry Virtual Tabletop",
      validationWarningTitle: "Aviso de validação",
      validationWarningMessage:
        "O JSON exportado pode não ser totalmente compatível com o Foundry VTT. {{message}}",
      exportJson: "Exportar JSON",
    },
    resetModal: {
      resetCurrentChar: "Reiniciar o personagem atual?",
      resetButtonText: "Reiniciar personagem"
    }
  },

  attributes: {
    title: "Atributos",
    physical: "Físicos",
    social: "Sociais",
    mental: "Mentais",
    strength: "Força",
    dexterity: "Destreza",
    stamina: "Vigor",
    charisma: "Carisma",
    manipulation: "Manipulação",
    composure: "Autocontrole",
    intelligence: "Inteligência",
    wits: "Raciocínio",
    resolve: "Determinação",
    descriptions: {
      strength: "Aplicação da força muscular",
      dexterity: "Agilidade e coordenação",
      stamina: "Resistência e tenacidade",
      charisma: "Charme, magnetismo e força de personalidade",
      manipulation: "Capacidade de influenciar os outros a fazer o que você deseja",
      composure: "Frieza e calma sob pressão",
      intelligence: "Memória e discernimento",
      wits: "Esperteza, intuição e rapidez de raciocínio",
      resolve: "Foco e determinação",
    },
  },
  skills: {
    title: "Habilidades",

    // categorias
    physical: "Físicos",
    social: "Sociais",
    mental: "Mentais",

    // físicas
    athletics: "Atletismo",
    brawl: "Briga",
    craft: "Ofícios",
    drive: "Condução",
    firearms: "Armas de Fogo",
    melee: "Armas Brancas",
    larceny: "Ladroagem",
    stealth: "Furtividade",
    survival: "Sobrevivência",

    // sociais
    "animal ken": "Empatia com Animais",
    etiquette: "Etiqueta",
    insight: "Sagacidade",
    intimidation: "Intimidação",
    leadership: "Liderança",
    performance: "Performance",
    persuasion: "Persuasão",
    streetwise: "Manha",
    subterfuge: "Subterfúgio",

    // mentais
    academics: "Erudição",
    awareness: "Percepção",
    finance: "Finanças",
    investigation: "Investigação",
    medicine: "Medicina",
    occult: "Ocultismo",
    politics: "Política",
    science: "Ciência",
    technology: "Tecnologia",

    descriptions: {
      athletics: "Corrida, salto, escalada",
      brawl: "Combate desarmado de todos os tipos",
      craft: "Artesanato, construção, modelagem",
      drive: "Operação de veículos",
      firearms: "Uso de armas de longo alcance",
      melee: "Combate corpo a corpo armado",
      larceny: "Arrombamento, invasão e proteção contra isso",
      stealth: "Não ser visto, ouvido ou reconhecido",
      survival: "Lidar com ambientes adversos",

      academics: "Humanidades e artes liberais, aprendizado via livros",
      awareness: "Sentidos aguçados, percepção do ambiente",
      finance: "Movimentação e administração de dinheiro",
      investigation: "Busca de pistas, resolução de mistérios",
      medicine: "Cura de ferimentos, diagnóstico de doenças",
      occult: "Conhecimentos secretos, reais ou místicos",
      politics: "Administração, manipulação e governo",
      science: "Conhecimento e teoria sobre o mundo físico",
      technology: "Compreensão de tecnologia moderna, computadores e internet",

      animalKen: "Interação e empatia com animais",
      etiquette: "Cumprimento de convenções sociais",
      insight: "Percepção de emoções e intenções",
      intimidation: "Fazer com que outros recuem pelo medo",
      leadership: "Inspirar, motivar e direcionar pessoas",
      performance: "Expressão artística diante de uma plateia",
      persuasion: "Convencimento e influência sobre outros",
      streetwise: "Compreensão da sociedade criminal e urbana",
      subterfuge: "Enganar, mentir e manipular com sutileza",
    },
    specialties: {
      "Stickups": "Assaltos",
      "Grappling": "Imobilização",
      "Coercion": "Coerção",
      "Security": "Segurança",
      "The Road": "Na Estrada",
      "Vampire Cant": "Gíria dos Vampiros",
      "Hunting Pack": "Matilha de Caça",
      "Stakeout": "Vigilância",
      "Gaslighting": "Manipulação Psicológica",
      "Coverups": "Encobrimentos",
      "Phlebotomy": "Flebotomia",
      "Vessels": "Vítimas Voluntárias",
      "[pick tradition]": "[escolha uma tradição]",
      "[pick any]": "[escolha qualquer uma]",
      "[Specific Scene]": "[Cena Específica]",
      "Seduction": "Sedução",
      "Anesthetics": "Anestesia",
      "Break-ins": "Invasões",
      "Grave rituals": "Rituais Fúnebres",
      "Cadavers": "Cadáveres",
      "Death": "Morte",
      "Forgery": "Falsificação",
      "Profiling": "Perfilamento",
      "Shadowing": "Sombreamento",
      "Marketing": "Marketing",
      "Ambushes and traps": "Emboscadas e Armadilhas",
      "Lockpicking": "Arrombamento",
      "Black market": "Mercado Negro",
      "Hunting": "Caça",
      "[pick animal]": "[escolha um animal]",
      "Kindred": "Vampiros",
      "Against Kindred": "Contra Vampiros",
    }
  },
  clans: {
    brujah: {
      name: "Brujah",
      description: "Rebeldes que sempre lutam contra o poder, fáceis de irritar",
      bane: "Temperamento Violento: Subtraia um número de dados igual a sua gravidade da perdição para testes de resistir ao Frenesi(min. de 1 dado).",
      compulsion:
        "Rebeldia: Rebele-se contra ordens ou expectativas de uma autoridade ou mude a opinião de alguém (à força, se necessário). Até então, receba uma penalidade de dois dados em todas as jogadas.",
    },

    gangrel: {
      name: "Gangrel",
      description: "Bestiais e próximos da natureza",
      bane: "Traços Bestiais: Em frenesi, ganha um número igual a sua gravidade da perdição de características animais (traço físico, cheiro, comportamento...). Dura mais uma noite após o frenesi.",
      compulsion:
        "Impulsos Feras: Por uma cena, sofra uma penalidade de três dados em Manipulação e Inteligência. Só pode falar em frases de uma palavra.",
    },

    nosferatu: {
      name: "Nosferatu",
      description: "Deformados que espreitam nas sombras",
      bane: "Repulsividade: Você conta como tendo o Defeito Repulsivo (-2) e nunca pode melhorar o Mérito Aparência. Qualquer tentativa de disfarçar a deformidade (mesmo sobrenaturalmente) sofre uma penalidade de dados igual a sua gravidade da perdição.",
      compulsion:
        "Criptofilia: Torna-se obcecado por obter segredos. Recusa-se a compartilhar segredos com outros, exceto em troca estrita por segredos maiores.",
    },

    malkavian: {
      name: "Malkavian",
      description: "Clarividentes enlouquecidos por seu dom",
      bane: "Perspectiva Fraturada: Quando sofre uma falha bestial ou compulsão, o personagem sofre uma penalidade igual a sua gravidade da perdição em uma categoria de parada de dados (Fisico, Social ou Mental) durante toda a cena.",
      compulsion:
        "Delírio: Penalidade de dois dados em Destreza, Manipulação, Compostura e Raciocínio, bem como resistências ao frenesi de terror por uma cena.",
    },

    tremere: {
      name: "Tremere",
      description: "Magos de sangue movidos pela fome de conhecimento",
      bane: "Sangue Deficiente: Não pode criar laços de sangue com outros Membros, e transformar alguém em carniçal requer uma quantidade igual a sua gravidade da perdição de goles adicionais.",
      compulsion:
        "Perfeccionismo: Até conseguir um sucesso crítico, todas as ações sofrem uma penalidade de dois dados. A penalidade é reduzida em um dado a cada repetição da mesma ação.",
    },

    ventrue: {
      name: "Ventrue",
      description: "Nobres e poderosos governantes, sempre buscando mais controle",
      bane: "Paladar Refinado: Escolha um grupo de vítimas preferidas. Alimentar-se de alguém fora desse grupo custa a sua gravidade da perdição em pontos de Força de Vontade.",
      compulsion:
        "Arrogância: Até que alguém obedeça uma ordem sua (sem o uso de Dominação), você sofre uma penalidade de dois dados em todas as jogadas não relacionadas à liderança.",
    },

    toreador: {
      name: "Toreador",
      description: "Artistas obcecados pela beleza, elegantes e muitas vezes esnobes",
      bane: "Fixação Estética: Enquanto estiver em ambientes pouco belos, sofre uma penalidade igual a sua gravidade da perdição em dados em jogadas de Disciplinas.",
      compulsion:
        "Obsessão: Torna-se fixado em algo da cena. Sofre uma penalidade de dois dados em quaisquer ações que não estejam diretamente relacionadas a esse objeto. Dura até não poder mais percebê-lo ou até o fim da cena.",
    },

    lasombra: {
      name: "Lasombra",
      description: "Predadores sombrios e escaladores sociais implacáveis",
      bane: "Imagem Distorcida: Reflexos e gravações (áudio ou vídeo) de você distorcem e tremem. Tecnologia sensível ao toque não responde.",
      compulsion:
        "Crueldade: A próxima falha após a compulsão faz com que todas as jogadas recebam penalidade até uma tentativa futura bem-sucedida da mesma ação.",
    },

    banuHaqim: {
      name: "Banu Haqim",
      description: "Assassinos e juízes com uma paixão distorcida por justiça",
      bane: "Vício em Sangue: Beber de outro vampiro provoca um teste de Frenesi da Fome com dificuldade 2 + a sua gravidade da perdição.",
      compulsion:
        "Julgamento: Beba pelo menos 1 ponto de fome de sangue de quem agir contra uma de suas convicções pessoais. Caso não consiga, sofra uma penalidade de três dados em todas as jogadas até satisfazer a compulsão ou o fim da cena.",
    },

    ministry: {
      name: "Ministry",
      description: "Clã de natureza cultista que usa a tentação como arma",
      bane: "Sob luz intensa, sofra uma penalidade igual a sua gravidade da perdição em todas as jogadas. Recebe a sua gravidade da perdição de dano adicional da luz solar.",
      compulsion:
        "Transgressão: Sofra uma penalidade de dois dados em todas as jogadas que não estejam relacionadas a induzir alguém (ou a si mesmo) a quebrar um Dogma da Crônica ou Convicção pessoal, causando ao menos uma Mancha e encerrando esta Compulsão.",
    },

    ravnos: {
      name: "Ravnos",
      description: "Ilusionistas que estão sempre em movimento",
      bane: "Destino Selado: Se dormir no mesmo local mais de uma vez em 7 dias, role um número de dados igual a sua gravidade da perdição e sofra dano agravado igual aos 10s obtidos. Deve estar a pelo menos 1 milha do último local de descanso.",
      compulsion:
        "Desafiar o Destino: Ao enfrentar um problema, deve escolher a solução mais perigosa e ousada, ou sofre uma penalidade de dois dados. Dura até que o problema seja resolvido ou novas tentativas sejam impossíveis.",
    },

    tzimisce: {
      name: "Tzimisce",
      description: "Modeladores de carne territoriais e gananciosos",
      bane: "Enraizado: Escolha um local ou grupo; se dormir longe dele, sofra a sua gravidade da perdição de dano agravado à Força de Vontade.",
      compulsion:
        "Cobiça: Torna-se obcecado em possuir algo na cena. Qualquer ação que não vise esse propósito sofre penalidade de dois dados. Persiste até possuir o objeto ou até ser impossível fazê-lo.",
    },

    hecata: {
      name: "Hecata",
      description: "Vampiros especializados em necromancia",
      bane: "Beijo Doloroso: Seu beijo vampírico é extremamente doloroso e não traz prazer à vítima.",
      compulsion:
        "Morbidez: Até prever ou solucionar a causa de uma morte local, sofre uma penalidade de três dados em todas as outras jogadas. As conclusões não precisam estar corretas, mas devem fazer sentido.",
    },

    salubri: {
      name: "Salubri",
      description: "Quase extinta linhagem de vampiros místicos",
      bane: "Caçados: Seu sangue é delicioso. Quando outros bebem de você, devem passar em um teste de Frenesi da Fome para parar. Você possui um terceiro olho na testa que não pode ser ocultado (nem sobrenaturalmente), mas pode ser coberto por roupas. Quando usa Disciplinas, ele chora sangue e vampiros com Fome ≥ 4 devem passar em um teste de Frenesi da Fome.",
      compulsion:
        "Empatia Afectiva: Fica sobrecarregado com o problema pessoal de alguém. Sofre uma penalidade de dois dados em ações que não visem resolver o problema. Dura até que o problema seja aliviado, uma crise imediata o substitua ou a cena termine.",
    },

    caitiff: {
      name: "Caitiff",
      description: "Vampiros sem clã, frequentemente desconfiados",
      bane: "Pária: Aumentar níveis de Disciplinas custa XP igual a 6x o novo nível (em vez de 5x).",
      compulsion: "Caitiffs não possuem compulsão.",
    },

    "thin-blood": {
      name: "Sangue-Ralo",
      description: "Meio Vampiro, meio Humano. Desprezado por todos.",
      bane: "Pária: Aumentar níveis de Disciplinas custa XP igual a 6x o novo nível (em vez de 5x).",
      compulsion: "Caitiffs não possuem compulsão.",
    },
  },
  predatorTypes: {
  alleycat: { 
    name: "Vira-lata",
    summary: "Emboscam presas em becos e ruas escuras.",
    merits: {
      criminalContacts: {
        name: "Contatos Criminosos",
        summary: "Relacionamentos no submundo que ajudam em atividades ilegais.",
      },
    },
  },
  extortionist: { 
    name: "Extorsionista", 
    summary: "Coagem suas presas a entregar o sangue sob ameaça.",
    meritsAndFlaws: {
      enemy: {
        name: "Inimigo",
        summary: "(Polícia ou Vítima)",
      },
    },
    selectable: {
      contacts: {
        name: "Contatos",
        summary: "Mortais que fornecem informações ou itens valiosos.",
      },
      resources: {
        name: "Recursos",
        summary: "Riqueza e renda disponíveis.",
      },
    },
  },
  "roadside killer": { 
    name: "Assassino da Estrada", 
    summary: "Caçam presas em estradas desertas.",
    merits: {
      herd: {
        name: "Rebanho",
        summary: "Rebanho migrante, sempre na estrada.",
      },
      preyExclusion: {
        name: "Exclusão de Presa",
        summary: "Não pode se alimentar de moradores locais.",
      },
    },
  },
  montero: { 
    name: "Montero", 
    summary: "Usam seus lacaios para conduzir as presas até a morte.",
    merits: {
      retainers: {
        name: "Servos",
        summary: "Mortais que ajudam você a caçar.",
      },
    },
  },
  cleaver: { 
    name: "Trinchador", 
    summary: "Alimentam-se de amigos e familiares.",
    merits: {
      herd: {
        name: "Rebanho",
        summary: "Grupo de mortais que permite você se alimentar.",
      },
      darkSecret: {
        name: "Segredo Sombrio",
        summary: "Trinchador.",
      },
    },
  },
  consensualist: { 
    name: "Consensualista", 
    summary: "Toma sangue apenas de quem consente.",
    merits: {
      masqueradeBreacher: {
        name: "Violador da Máscara",
        summary: " ",
      },
      preyExclusion: {
        name: "Exclusão de Presa",
        summary: "Não pode se alimentar de quem não consentiu.",
      },
    }, 
  },
  osiris: { 
    name: "Osíris", 
    summary: "Alimenta-se dos próprios seguidores.",
    selectable: {
      fame: {
        name: "Fama",
        summary: "",
      },
      herd: {
        name: "Rebanho",
        summary: "Grupo de mortais que permite você se alimentar.",
      },
      enemies: {
        name: "Inimigos",
        summary: "Grupo de mortais que deseja te causar dano.",
      },
      folkloricBane: {
        name: "Fraqueza Folclórica",
        summary: "Itens específicos te causam dano (ex: prata, alho).",
      },
      folkloricBlock: {
        name: "Bloqueio Folclórico",
        summary: "Precisa gastar Força de Vontade para atravessar barreiras específicas (ex: água corrente, porta sem convite).",
      },
      stigmata: {
        name: "Estigmas",
        summary: "Sangra das mãos, pés e testa quando em Fome 4.",
      },
      stakeBait: {
        name: "Alvo de Estaca",
        summary: "Sofre Morte Final ao ser empalado.",
      },
    },
  },
  "scene queen": { 
    name: "Rainha da Cena", 
    summary: "Alimenta-se dentro da própria cena ou subcultura.",
    merits: {
      fame: {
        name: "Fama",
        summary: "Uma subcultura específica o adora.",
      },
      contact: {
        name: "Contato",
        summary: " ",
      },
    },
    selectable: {
      disliked: {
        name: "Desprezado",
        summary: "Uma subcultura o despreza.",
      },
      preyExclusionScene: {
        name: "Exclusão de Presa (outra cena)",
        summary: "Não pode se alimentar de presas excluídas.",
      },
    },

  },
  siren: { 
    name: "Sereia", 
    summary: "Seduz suas presas e toma o sangue delas.",
    merits: {
      beautiful: {
        name: "Belo(a)",
        summary: "+1 dado em testes Sociais.",
      },
      enemy: {
        name: "Inimigo",
        summary: "(Amante rejeitado ou parceiro ciumento).",
      },
    },
  },
  sandman: { 
    name: "Sandman", 
    summary: "Invadem casas e se alimentam de presas adormecidas.",
    merits: {
      resources: {
        name: "Recursos",
        summary: " ",
      },
    }, 
  },
  graverobber: { 
    name: "Ladrão de Túmulos", 
    summary: "Alimenta-se de cadáveres frescos e famílias enlutadas.",
    merits: {
      ironGullet: {
        name: "Esôfago de Ferro",
        summary: "Capaz de se alimentar de sangue frio ou rançoso.",
      },
      haven: {
        name: "Refúgio",
        summary: " ",
      },
      obviousPredator: {
        name: "Predador Óbvio",
        summary: "Mortais têm medo de você; não pode manter Rebanho.",
      },
    }, 
  },
  "grim reaper": { 
    name: "Ceifador", 
    summary: "Alimenta-se exclusivamente de moribundos.",
    merits: {
      allies: {
        name: "Aliados",
        summary: "Comunidade médica.",
      },
      preyExclusion: {
        name: "Exclusão de Presa",
        summary: "Não pode se alimentar dos saudáveis.",
      },
    },
  },
  pursuer: { 
    name: "Perseguidor", 
    summary: "Persegue suas presas por longos períodos antes de matá-las.",
    merits: {
      bloodhound: {
        name: "Farejador de Sangue",
        summary: "Sente a ressonância no sangue mortal.",
      },
      contacts: {
        name: "Contatos",
        summary: "Pessoa antiética nos seus hábitos de caça.",
      },
    }, 
  },
  trapdoor: { 
    name: "Alçapão", 
    summary: "Cria armadilhas em seu refúgio e atrai presas até elas.",
    merits: {
      haven: {
        name: "Refúgio",
        summary: "Capaz de sentir a ressonância no sangue mortal.",
      },
    },
    selectable: {
      retainer: {
        name: "Retentor",
        summary: "Servo mortal fraco.",
      },
      herd: {
        name: "Rebanho",
        summary: "Grupo de mortais que permite você se alimentar.",
      },
      haven: {
        name: "Refúgio",
        summary: "Um apartamento seguro.",
      },
      creepy: {
        name: "Assustador",
        summary: "As pessoas têm receio da sua casa.",
      },
      haunted: {
        name: "Assombrado",
        summary: "Presença fantasmagórica em seu refúgio.",
      },
    },
  },
  bagger: { 
    name: "Sacoleiro", 
    summary: "Alimenta-se de bolsas de sangue.",
    merits: {
      ironGullet: {
        name: "Esôfago de Ferro",
        summary: "Capaz de se alimentar de sangue frio ou rançoso.",
      },
      enemy: {
        name: "Inimigo",
        summary: "Alguém acredita que você está em dívida com ele.",
      },
    }, 
  },
  "blood leech": { 
    name: "Sanguessuga", 
    summary: "Alimenta-se de outros vampiros.",
    selectable: {
      diablerist: {
        name: "Diablerista",
        summary: "Alguém sabe que você se alimenta de outros Membros.",
      },
      shunned: {
        name: "Rejeitado",
        summary: "É desprezado por uma facção.",
      },
    }, 
  },
  farmer: { 
    name: "Fazendeiro", 
    summary: "Alimenta-se de animais.",
    merits: {
      farmer: {
        name: "Fazendeiro",
        summary: "Alimentar-se de sangue não animal custa 2 de Força de Vontade.",
      },
    },
  },
},
disciplineName: {
  animalism: "Animalismo",
  auspex: "Auspícios",
  celerity: "Celeridade",
  dominate: "Dominação",
  fortitude: "Fortitude",
  obfuscate: "Ofuscação",
  potence: "Potência",
  presence: "Presença",
  protean: "Proteanismo",
  "blood sorcery": "Feitiçaria de Sangue",
  oblivion: "Oblivion",
  "thin-blood alchemy": "Alquimia dos Sangue-Ralo",
},
disciplines: {
    animalism: {
      summary: "Interagir e controlar animais",
      powers: {
        bondFamulus: {
          name: "Vínculo com o Fâmulo",
          summary: "Cria um laço com um animal companheiro que obedece comandos simples.",
        },
        senseBeast: {
          name: "Sentir a Besta",
          summary: "Percebe hostilidade e traços sobrenaturais em pessoas ou criaturas.",
        },
        feralWhispers: {
          name: "Sussurros Féricos",
          summary: "Permite comunicar-se com animais e convocá-los se estiverem por perto.",
        },
        atavism: {
          name: "Atavismo",
          summary: "Faz com que um animal entre em fúria ou fuja aterrorizado.",
        },
        animalSucculence: {
          name: "Suculência Animal",
          summary: "Alimenta-se de animais com mais eficiência; pode consumir seu fâmulo para absorver seus aspectos temporariamente.",
        },
        scentOfPrey: {
          name: "Cheiro de Presa",
          summary: "Detecta mortais que testemunharam violações da Máscara.",
        },
        quellBeast: {
          name: "Silenciar a Besta",
          summary: "Suprime os impulsos e desejos de um alvo, acalmando até vampiros em frenesi.",
        },
      },
    },

    auspex: {
      summary: "Sentidos sobrenaturais e premonições",
      powers: {
        heightenedSenses: {
          name: "Sentidos Aguçados",
          summary: "Aprimora seus sentidos a níveis sobre-humanos; adiciona Auspícios aos testes de percepção.",
        },
        senseUnseen: {
          name: "Sentir o Invisível",
          summary: "Percebe atividades ou presenças sobrenaturais ocultas.",
        },
        premonition: {
          name: "Premonição",
          summary: "Recebe visões do futuro ou sensações de eventos prestes a acontecer.",
        },
        obeah: {
          name: "Obeah",
          summary: "Acalma a mente de uma pessoa, aliviando sofrimento psicológico.",
        },
        unerringPursuit: {
          name: "Perseguição Infallível",
          summary: "Cria um vínculo sensorial com um alvo para observá-lo à distância.",
        },
        fatalFlaw: {
          name: "Falha Fatal",
          summary: "Revela a fraqueza mais vulnerável de um alvo.",
        },
        scrySoul: {
          name: "Ler a Alma",
          summary: "Permite enxergar as auras das pessoas e seus estados emocionais.",
        },
        shareSenses: {
          name: "Partilhar Sentidos",
          summary: "Experimente o mundo através dos sentidos de outro ser, como se fossem seus.",
        },
      },
    },

    celerity: {
      summary: "Mover-se com velocidade sobrenatural",
      powers: {
        catsGrace: {
          name: "Graça Felina",
          summary: "Move-se com equilíbrio e agilidade impecáveis, nunca tropeçando.",
        },
        rapidReflexes: {
          name: "Reflexos Rápidos",
          summary: "Reage com rapidez sobre-humana, permitindo ações menores gratuitas.",
        },
        fleetness: {
          name: "Presteza",
          summary: "Adiciona o valor de Celeridade à defesa e a testes de Destreza.",
        },
        blink: {
          name: "Piscar",
          summary: "Move-se até 50 metros em um piscar de olhos, como um borrão sobrenatural.",
        },
        traversal: {
          name: "Travessia",
          summary: "Corre sobre superfícies verticais ou líquidas sem esforço.",
        },
        weaving: {
          name: "Tecelagem",
          summary: "Usa a Celeridade para desviar de projéteis e ataques à distância.",
        },
      },
    },

    dominate: {
      summary: "Controlar as mentes dos outros",
      powers: {
        cloudMemory: {
          name: "Nublar Memória",
          summary: "Apaga as lembranças do último minuto da mente de uma vítima.",
        },
        compel: {
          name: "Compelir",
          summary: "Emite uma ordem simples que deve ser cumprida imediatamente.",
        },
        mesmerize: {
          name: "Hipnotizar",
          summary: "Permite dar comandos complexos a um alvo submisso.",
        },
        domitorsFavor: {
          name: "Favor do Dominador",
          summary: "Torna mais difícil para lacaios resistirem à sua influência mental.",
        },
        slavishDevotion: {
          name: "Devoção Servil",
          summary: "Fortalece a mente de suas vítimas dominadas contra interferência de outros vampiros.",
        },
        dementation: {
          name: "Demência",
          summary: "Induz surtos psicóticos ou colapsos nervosos em suas vítimas.",
        },
        forgetfulMind: {
          name: "Mente Esquecida",
          summary: "Reescreve ou apaga memórias específicas de um alvo.",
        },
        submergedDirective: {
          name: "Ordem Submersa",
          summary: "Implanta um comando que permanece latente até que uma condição seja cumprida.",
        },
      },
    },
    fortitude: {
      summary: "Resistir a danos e influências",
      powers: {
        resilience: {
          name: "Resiliência",
          summary: "Adiciona seu valor de Fortitude à sua trilha de vitalidade.",
        },
        unswayableMind: {
          name: "Mente Inabalável",
          summary: "Concede resistência extra contra manipulação mental e emocional.",
        },
        toughness: {
          name: "Robustez",
          summary: "Reduz o dano físico superficial sofrido.",
        },
        valeren: {
          name: "Valeren",
          summary: "Usa o próprio sangue para curar ferimentos de outros vampiros.",
        },
        defyBane: {
          name: "Desafiar o Flagelo",
          summary: "Transforma dano agravado em dano superficial temporariamente.",
        },
        fortifyInnerFacade: {
          name: "Fortificar a Fachada Interior",
          summary: "Reforça a mente contra poderes de leitura e detecção como Auspícios.",
        },
        sealBeastsMaw: {
          name: "Selar a Boca da Besta",
          summary: "Ignora os efeitos da Fome por uma cena inteira.",
        },
      },
    },

    obfuscate: {
      summary: "Manter-se indetectável",
      powers: {
        cloakShadows: {
          name: "Manto das Sombras",
          summary: "Mistura-se ao ambiente enquanto permanece imóvel.",
        },
        silenceDeath: {
          name: "Silêncio da Morte",
          summary: "Silencia todos os sons que você faz, tornando-o inaudível.",
        },
        unseenPassage: {
          name: "Passagem Invisível",
          summary: "Move-se enquanto permanece oculto dos olhos alheios.",
        },
        chimerstry: {
          name: "Quimerismo",
          summary: "Cria ilusões sensoriais breves para enganar os sentidos.",
        },
        ghostsPassing: {
          name: "Passagem Fantasmal",
          summary: "Estende seus poderes de ofuscação para animais sob sua influência.",
        },
        ghostMachine: {
          name: "Fantasma na Máquina",
          summary: "Afeta dispositivos tecnológicos, escondendo sua presença em gravações e sensores.",
        },
        maskThousandFaces: {
          name: "Máscara das Mil Faces",
          summary: "Muda sua aparência para a de uma pessoa genérica e irreconhecível.",
        },
        mentalMaze: {
          name: "Labirinto Mental",
          summary: "Faz um alvo ser incapaz de perceber saídas ou meios de fuga.",
        },
      },
    },

    potence: {
      summary: "Adquirir força sobrenatural",
      powers: {
        lethalBody: {
          name: "Corpo Letal",
          summary: "Causa ferimentos devastadores com força bruta contra mortais.",
        },
        soaringLeap: {
          name: "Salto Imponente",
          summary: "Salta distâncias enormes com facilidade sobrenatural.",
        },
        prowess: {
          name: "Proeza",
          summary: "Adiciona o valor de Potência aos testes de força física.",
        },
        brutalFeed: {
          name: "Alimentação Brutal",
          summary: "Drena uma vítima em questão de segundos.",
        },
        uncannyGrip: {
          name: "Aderência Sobrenatural",
          summary: "Permite escalar paredes e andar em tetos com firmeza.",
        },
        wrecker: {
          name: "Demolidor",
          summary: "Duplica o valor de Potência ao destruir objetos.",
        },
      },
    },

    presence: {
      summary: "Aparência e carisma sobrenaturais",
      powers: {
        awe: {
          name: "Admiração",
          summary: "Torna-se cativante e carismático, atraindo atenção e respeito.",
        },
        daunt: {
          name: "Intimidação",
          summary: "Inspira medo, afastando ou subjugando os outros.",
        },
        eyesSerpent: {
          name: "Olhos da Serpente",
          summary: "Imobiliza alguém com um simples olhar hipnótico.",
        },
        lingeringKiss: {
          name: "Beijo Duradouro",
          summary: "Faz com que mortais alimentados se apaixonem por você.",
        },
        melpominee: {
          name: "Melpominéia",
          summary: "Permite usar Presença através da voz, mesmo sem ser visto.",
        },
        dreadGaze: {
          name: "Olhar Aterrador",
          summary: "Aterrorizando um alvo, forçando-o a fugir, congelar ou entrar em frenesi.",
        },
        entrancement: {
          name: "Encantamento",
          summary: "Causa devoção intensa, levando o alvo a agir para agradá-lo.",
        },
        thrownVoice: {
          name: "Voz Lançada",
          summary: "Projeta sua voz para qualquer ponto dentro do seu campo de visão.",
        },
      },
    },
    protean: {
      summary: "Moldar o corpo para obter poder",
      powers: {
        eyesBeast: {
          name: "Olhos da Besta",
          summary: "Seus olhos brilham e permitem enxergar perfeitamente na escuridão total.",
        },
        weightFeather: {
          name: "Peso da Pena",
          summary: "Torna-se leve como o ar, quase sem peso.",
        },
        feralWeapons: {
          name: "Armas Feras",
          summary: "Faz crescer garras letais que rasgam carne e osso.",
        },
        vicissitude: {
          name: "Vicissitude",
          summary: "Remodela pele, músculos e ossos à vontade, alterando sua forma física.",
        },
        earthMeld: {
          name: "Fusão com a Terra",
          summary: "Afunda no solo e permanece oculto, seguro até emergir novamente.",
        },
        shapechange: {
          name: "Metamorfose",
          summary: "Transforma-se em um animal de tamanho humano, como lobo ou morcego.",
        },
      },
    },

    "bloodSorcery": {
      summary: "Usar magia e rituais ligados ao sangue",
      powers: {
        corrosiveVitae: {
          name: "Vitae Corrosiva",
          summary: "Faz com que seu sangue corroa materiais inertes ao tocá-los.",
        },
        tasteBlood: {
          name: "Sabor do Sangue",
          summary: "Ao provar uma gota de sangue, descobre informações sobre o doador.",
        },
        shapeSanguineSacrament: {
          name: "Forma do Sacrário Sanguíneo",
          summary: "Manipula sangue para formar símbolos, mensagens ou figuras simples.",
        },
        extinguishVitae: {
          name: "Extinguir Vitae",
          summary: "Aumenta a fome de outro vampiro, drenando-lhe energia vital.",
        },
        scourSecrets: {
          name: "Rasgar Segredos",
          summary: "Descobre informações ocultas dentro de textos ou objetos escritos.",
        },
        bloodPotency: {
          name: "Potência de Sangue",
          summary: "Aumenta temporariamente sua Potência de Sangue.",
        },
        scorpionsTouch: {
          name: "Toque do Escorpião",
          summary: "Transforma seu sangue em um veneno paralisante mortal.",
        },
        transitiveBond: {
          name: "Vínculo Transitivo",
          summary: "Permite que o sangue mantenha o vínculo mesmo armazenado ou em lacaios.",
        },
      },
    },

    oblivion: {
      summary: "Dominar sombras e necromancia",
      powers: {
        shadowCloak: {
          name: "Manto das Sombras",
          summary: "Manipula sombras para ocultar-se ou intimidar outros.",
        },
        oblivionsSight: {
          name: "Visão do Oblívio",
          summary: "Permite enxergar no escuro e perceber fantasmas ou presenças etéreas.",
        },
        ashesAshes: {
          name: "Cinzas às Cinzas",
          summary: "Usa vitae para desintegrar corpos não vampíricos.",
        },
        bindingFetter: {
          name: "Grilhão Espectral",
          summary: "Identifica objetos e lugares ligados a espíritos.",
        },
        shadowCast: {
          name: "Projeção Sombria",
          summary: "Invoca uma sombra sobrenatural sob seu controle.",
        },
        whereShroudThins: {
          name: "Onde o Véu se Enfraquece",
          summary: "Detecta locais onde os mortos podem atravessar para o mundo dos vivos.",
        },
        auraDecay: {
          name: "Aura da Decadência",
          summary: "Faz com que tudo ao redor comece a apodrecer e deteriorar-se.",
        },
        shadowPerspective: {
          name: "Perspectiva Sombria",
          summary: "Projeta seus sentidos através das sombras, vendo e ouvindo à distância.",
        },
        touchOblivion: {
          name: "Toque do Oblívio",
          summary: "Causa decomposição instantânea em corpos vivos ou mortos-vivos.",
        },
      },
    },    
  },
  rituals: {
    bloodWalk: {
      name: "Caminho do Sangue",
      summary:
        "Usa o sangue de um alvo para descobrir sua geração, nome, criador e — em um sucesso crítico — quaisquer Vínculos de Sangue ativos.",
    },
    clingingInsect: {
      name: "Aderência do Inseto",
      summary:
        "Bebe sangue misturado com uma aranha recém-esmagada para grudar em paredes e tetos como um inseto.",
    },
    craftBloodstone: {
      name: "Criar Pedra de Sangue",
      summary:
        "Embebe lentamente o sangue em um pequeno ímã; ao concluir, sente a direção e distância aproximada da pedra por uma semana.",
    },
    wakeEveningsFreshness: {
      name: "Despertar com o Frescor da Noite",
      summary:
        "Ao ser ameaçado durante o dia, desperta imediatamente e ignora as penalidades diurnas por uma cena.",
    },
    wardAgainstGhouls: {
      name: "Proteção Contra Carniçais",
      summary:
        "Coloca uma proteção em um pequeno objeto; se um carniçal tentar tocá-lo, a barreira o repele e o fere.",
    },
  },

  meritsAndFlaws: {
  thinblood: {
    title: "◐ Específicos de Sangue-Ralo",
    merits: {
      anarchComrades: {
        name: "Camaradas Anarquistas",
        summary: "Uma coterie de anarquistas o considera seu protegido."
      },
      camarillaContact: {
        name: "Contato na Camarilla",
        summary: "Um recrutador da Camarilla promete admissão, mas o trata mal e exige tarefas."
      },
      catenatingBlood: {
        name: "Sangue Vinculante",
        summary: "Você pode criar laços de sangue e abraçar novos vampiros."
      },
      dayDrinker: {
        name: "Beber-à-Luz-do-Dia",
        summary: "A luz solar não o fere, mas remove suas habilidades vampíricas e reduz sua saúde pela metade."
      },
      disciplineAffinity: {
        name: "Afinidade de Disciplina",
        summary: "Escolha uma Disciplina (nível 1) que você pode aprimorar como um vampiro normal."
      },
      lifelike: {
        name: "Aparência Viva",
        summary: "Seu corpo parece humano, com coração batendo e estômago funcional."
      },
      alchemist: {
        name: "Alquimista Sangue-Ralo",
        summary: "Ganha um ponto e uma fórmula em Alquimia de Sangue-Ralo."
      },
      resilience: {
        name: "Resiliência Vampírica",
        summary: "Sofre apenas dano superficial da maioria das fontes, como um vampiro normal."
      }
    },
    flaws: {
      babyTeeth: {
        name: "Dentes de Leite",
        summary: "Seus dentes são inúteis para se alimentar; você precisa cortar suas vítimas."
      },
      bestialTemper: {
        name: "Temperamento Bestial",
        summary: "É suscetível à fúria como um vampiro comum."
      },
      branded: {
        name: "Marcado pela Camarilla",
        summary: "A Camarilla mantém vigilância constante sobre você."
      },
      shunned: {
        name: "Rejeitado pelos Anarquistas",
        summary: "Os anarquistas o evitam completamente."
      },
      clanCurse: {
        name: "Maldição de Clã",
        summary: "Escolha uma maldição de clã (gravidade 1)."
      },
      deadFlesh: {
        name: "Carne Morta",
        summary: "Sua carne apodrece lentamente; –1 em testes sociais com mortais."
      },
      mortalFrailty: {
        name: "Fragilidade Mortal",
        summary: "Não pode despertar o sangue para se curar."
      },
      vitaeDependency: {
        name: "Dependência de Vitae",
        summary: "Precisa beber vitae vampírica uma vez por semana para usar Disciplinas."
      }
    }
  },

  looks: {
    title: "💄 Aparência",
    merits: {
      beautiful: {
        name: "Bonito(a)",
        summary: "+1 dado em testes sociais."
      },
      stunning: {
        name: "Impressionante",
        summary: "+2 dados em testes sociais."
      }
    },
    flaws: {
      ugly: {
        name: "Feio(a)",
        summary: "–1 dado em testes sociais."
      },
      repulsive: {
        name: "Repulsivo(a)",
        summary: "–2 dados em testes sociais."
      }
    }
  },
  haven: {
    title: "🏠 Refúgio",
    merits: {
      haven: {
        name: "Refúgio",
        summary: "Base segura; 1 – apartamento simples, 3 – grande edifício."
      },
      hiddenArmory: {
        name: "Arsenal Oculto",
        summary: "Armas e armaduras armazenadas no refúgio."
      },
      cell: {
        name: "Cela",
        summary: "Permite aprisionar pessoas dentro do refúgio."
      },
      watchmen: {
        name: "Vigilantes",
        summary: "Guardiões mortais responsáveis pela segurança."
      },
      luxury: {
        name: "Luxo",
        summary: "+2 dados em testes sociais realizados dentro do refúgio."
      }
    },
    flaws: {
      noHaven: {
        name: "Sem Refúgio",
        summary: "Você não possui um local fixo para se abrigar."
      },
      haunted: {
        name: "Assombrado",
        summary: "Presença espectral frequente dentro do refúgio."
      },
      creepy: {
        name: "Perturbador",
        summary: "O refúgio causa má impressão; pode atrair atenção policial ou suspeitas."
      },
      compromised: {
        name: "Comprometido",
        summary: "O refúgio está em uma lista de vigilância ou é monitorado."
      }
    }
  },

  resources: {
    title: "💰 Recursos",
    merits: {
      resources: {
        name: "Recursos",
        summary: "Riqueza e renda; 1 – cobre o básico, 5 – pode adquirir qualquer coisa disponível no mercado."
      },
      trunk: {
        name: "Equipamento Móvel",
        summary: "Acesso fácil a armamentos ou ferramentas, limitados a valor equivalente a Recursos 2."
      }
    },
    flaws: {
      destitute: {
        name: "Indigente",
        summary: "Sem renda e em situação financeira precária."
      }
    }
  },
  feeding: {
    title: "🩸 Alimentação",
    merits: {
      bloodhound: {
        name: "Farejador de Sangue",
        summary: "Capaz de identificar a ressonância no sangue mortal através do olfato."
      },
      highFunctioningAddict: {
        name: "Viciado Funcional",
        summary: "Adicione +1 dado a uma categoria de teste (escolhida uma vez) quando a última vítima alimentada estava sob o efeito da sua droga."
      },
      ironGullet: {
        name: "Esôfago de Ferro",
        summary: "Capaz de se alimentar de sangue coagulado, deteriorado ou impuro."
      }
    },
    flaws: {
      preyExclusion: {
        name: "Exclusão de Presa",
        summary: "Não pode se alimentar de certos tipos de pessoas."
      },
      methuselasThirst: {
        name: "Sede do Matusalém",
        summary: "Não consegue saciar completamente a fome com sangue mortal."
      },
      farmer: {
        name: "Agricultor",
        summary: "Alimentar-se de sangue não animal custa 2 de Força de Vontade."
      },
      organovore: {
        name: "Organívoro",
        summary: "Sua fome exige carne e órgãos humanos."
      },
      addiction: {
        name: "Vício",
        summary: "–1 dado em todos os testes se a última vítima alimentada não estava sob sua droga preferida."
      },
      hopelessAddiction: {
        name: "Vício Irrecuperável",
        summary: "–2 dados em todos os testes se a última vítima alimentada não estava sob sua droga preferida."
      }
    }
  },

  times: {
    title: "🕰 Mantendo-se Atualizado",
    merits: {},
    flaws: {
      livingPast: {
        name: "Preso ao Passado",
        summary: "Mantém visões e convicções ultrapassadas."
      },
      archaic: {
        name: "Arcaico",
        summary: "A perícia de Tecnologia permanece no nível 0."
      }
    }
  },

  mythic: {
    title: "🌙 Mítico",
    merits: {
      eatFood: {
        name: "Come Comida",
        summary: "Pode consumir alimentos normais sem consequências imediatas."
      }
    },
    flaws: {
      folkloricBane: {
        name: "Fraqueza Folclórica",
        summary: "Certos itens (como prata ou alho) causam dano."
      },
      folkloricBlock: {
        name: "Bloqueio Folclórico",
        summary: "Deve gastar Força de Vontade para cruzar certos obstáculos (ex: água corrente, portas não convidadas)."
      },
      stigmata: {
        name: "Estigmas",
        summary: "Sangra pelas mãos, pés e testa ao atingir Fome 4."
      },
      stakeBait: {
        name: "Alvo de Estaca",
        summary: "Sofre Morte Final ao ser empalado por uma estaca."
      }
    }
  },  
  mask: {
    title: "👺 Máscara",
    merits: {
      mask: {
        name: "Máscara",
        summary: "identidade falsa com documentos falsos; no nível 2, passa em verificações de antecedentes",
      },
      zeroed: {
        name: "Apagado",
        summary: "todos os seus registros reais foram apagados; oficialmente você não existe",
      },
      cobbler: {
        name: "Falsificador",
        summary: "você pode criar ou providenciar máscaras para outras pessoas",
      },
    },
    flaws: {
      knownCorpse: {
        name: "Morto Conhecido",
        summary: "outros sabem que você está morto",
      },
      knownBlankbody: {
        name: "Blankbody Conhecido",
        summary: "certos governos/organizações sabem que você é um vampiro",
      },
    },
  },

  linguistics: {
    title: "🗣 Linguística",
    merits: {
      linguistics: {
        name: "Linguística",
        summary: "falar fluentemente outro idioma",
      },
    },
    flaws: {
      illiterate: {
        name: "Analfabeto",
        summary: "não sabe ler nem escrever; Acadêmicos e Ciência limitados a 1",
      },
    },
  },

  kindred: {
    title: "🧛 Membros",
    merits: {
      mawla: {
        name: "Mawla",
        summary: "mentor vampírico para aconselhar ou ajudar você",
      },
      status: {
        name: "Status",
        summary: "reputação positiva dentro de uma facção",
      },
    },
    flaws: {
      adversary: {
        name: "Adversário",
        summary: "inimigo vampírico",
      },
      suspect: {
        name: "Suspeito",
        summary: "má reputação dentro de uma facção; -2 em testes sociais com ela",
      },
      shunned: {
        name: "Rejeitado",
        summary: "desprezado por uma facção",
      },
      darkSecret: {
        name: "Segredo Sombrio",
        summary: "você guarda um segredo sombrio, como dever uma dívida a pessoas perigosas ou ter escapado de uma caçada de sangue por violar a Máscara em outra cidade",
      },
    },
  },
  bonding: {
    title: "⛓️ Vínculo de Sangue",
    flaws: {
      longBond: {
        name: "Vínculo Duradouro",
        summary: "os vínculos de sangue em você demoram mais para enfraquecer",
      },
      bondJunkie: {
        name: "Viciado em Vínculo",
        summary: "perde um dado em todas as ações que vão contra o seu vínculo de sangue",
      },
      bondslave: {
        name: "Escravo de Vínculo",
        summary: "os vínculos de sangue em você são criados já no primeiro gole",
      },
    },
  },

  mortals: {
    title: "👱 Mortais",
    merits: {
      retainer: {
        name: "Lacaio",
        summary: "servo mortal leal; 1 - indivíduo fraco ou marginal, 3 - retentor profissional habilidoso",
      },
      allies: {
        name: "Aliados",
        summary: "grupo de mortais que o aconselham ou ajudam",
      },
      contacts: {
        name: "Contatos",
        summary: "mortais que fornecem informações ou itens valiosos",
      },
      herd: {
        name: "Rebanho",
        summary: "grupo de mortais que o deixam se alimentar; 1 - poucas pessoas, 5 - grande grupo com ressonâncias à escolha",
      },
      fame: {
        name: "Fama",
        summary: "1 - amado por uma subcultura específica, 5 - amplamente conhecido e adorado globalmente",
      },
    },
    flaws: {
      stalkers: {
        name: "Perseguidores",
        summary: "seguidores mortais indesejados",
      },
      enemy: {
        name: "Inimigo",
        summary: "grupo de mortais que deseja prejudicá-lo",
      },
      obviousPredator: {
        name: "Predador Evidente",
        summary: "os mortais têm medo de você; não pode manter um Rebanho",
      },
      infamy: {
        name: "Infâmia",
        summary: "1 - desprezado por uma subcultura, 5 - amplamente odiado globalmente",
      },
    },
  },
}
}

export default ptbr