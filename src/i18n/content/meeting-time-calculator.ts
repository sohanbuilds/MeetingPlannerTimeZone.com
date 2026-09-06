export interface Faq {
	q: string;
	a: string;
}

export interface MeetingTimeCalculatorContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	faqHeading: string;
	faqs: Faq[];
}

export const meetingTimeCalculatorContent: Record<string, MeetingTimeCalculatorContent> = {
	es: {
		title: 'Calculadora de Zona Horaria para Reuniones — Mejor Hora para Llamar a Alguien en el Extranjero',
		description:
			'Un planificador de fecha y hora para dos ciudades — elige ambas y ve al instante la mejor hora para llamar o reunirte, clasificada por Puntuación de Comodidad para que sea conveniente para ambas partes.',
		eyebrow: 'Calculadora de dos ciudades',
		h1: 'Mejor hora para llamar, calculadora de hora de reunión',
		intro:
			"¿Te preguntas cuál es la mejor hora para llamar a alguien en otra ciudad — o simplemente necesitas la superposición entre dos jornadas laborales? Elige dos ciudades abajo y clasificaremos cada hora del día según lo cómoda que sea para ambas personas, no solo si técnicamente se superpone.",
		faqHeading: 'Preguntas frecuentes',
		faqs: [
			{
				q: '¿Cuál es la mejor hora para llamar a alguien en otra zona horaria?',
				a: 'La mejor hora es una que cae dentro de las horas cómodas de ambas personas — no solo "técnicamente de día" para ambas. Configura el modo de cada persona en Trabajo o Personal arriba, y cada hora candidata recibe una Puntuación de Comodidad (Excelente, Buena o Mala) para que veas de un vistazo qué horas son realmente convenientes y no solo posibles.',
			},
			{
				q: '¿En qué se diferencia esto de un simple conversor de zona horaria?',
				a: 'Un conversor solo te muestra qué hora es en otro lugar. Esta calculadora clasifica cada hora del día para ambos participantes a la vez, teniendo en cuenta el horario laboral o de vigilia de cada persona, los fines de semana y tu propio control deslizante de horas aceptables — y luego muestra las horas que realmente vale la pena proponer.',
			},
			{
				q: '¿Puedo compartir el resultado con la otra persona?',
				a: 'Sí — el botón "Copiar enlace para compartir" codifica tus dos ciudades, la fecha elegida y la configuración directamente en la URL, así que quien reciba el enlace ve exactamente el mismo cálculo al instante, sin registro y sin tener que volver a introducir nada manualmente.',
			},
		],
	},
	ja: {
		title: 'ミーティングプランナー・タイムゾーン計算ツール — 海外の相手に電話する最適な時間',
		description:
			'2都市のための時間と日付のミーティングプランナー — 両方を選ぶと、コンフォートスコアでランク付けされた、通話や会議に最適な時間が瞬時にわかります。',
		eyebrow: '2都市計算ツール',
		h1: '最適な通話時間、ミーティング時間計算ツール',
		intro:
			'別の都市にいる相手に電話するのに最適な時間を知りたい、あるいは単に2つの勤務日の重なりを知りたいだけですか?下で2つの都市を選ぶと、単に技術的に重なっているかどうかだけでなく、両者にとってどれだけ快適かで1日の各時間をランク付けします。',
		faqHeading: 'よくある質問',
		faqs: [
			{
				q: '別のタイムゾーンにいる相手に電話するのに最適な時間は?',
				a: '最適な時間とは、両者にとって快適な時間帯に収まる時間です — 両者にとって「技術的に昼間」というだけではありません。上で各人のモードを仕事用または個人用に設定すると、候補となる各時間にコンフォートスコア(優秀、良い、悪い)が付き、単に可能な時間ではなく、本当に都合の良い時間が一目でわかります。',
			},
			{
				q: '単純なタイムゾーン変換ツールとの違いは?',
				a: '変換ツールは他の場所の現在時刻を示すだけです。この計算ツールは、各人の勤務時間や起きている時間、週末、そしてあなた自身が設定した許容時間スライダーを考慮して、両方の参加者について1日の各時間をランク付けし、実際に提案する価値のある時間を表示します。',
			},
			{
				q: '結果を相手と共有できますか?',
				a: 'はい — 「共有可能なリンクをコピー」ボタンは、2つの都市、選択した日付、設定を直接URLにエンコードするので、リンクを送った相手も登録なしで手動での再入力なしに、瞬時にまったく同じ計算結果を見ることができます。',
			},
		],
	},
	fr: {
		title: 'Calculateur de Fuseau Horaire pour Réunions — Meilleur Moment pour Appeler Quelqu\'un à l\'Étranger',
		description:
			"Un planificateur de date et d'heure pour deux villes — choisissez les deux et voyez instantanément le meilleur moment pour appeler ou se réunir, classé par Score de Confort pour que ce soit pratique pour les deux parties.",
		eyebrow: 'Calculateur deux villes',
		h1: 'Meilleur moment pour appeler, calculateur d\'heure de réunion',
		intro:
			"Vous vous demandez quel est le meilleur moment pour appeler quelqu'un dans une autre ville — ou vous avez simplement besoin du chevauchement entre deux journées de travail ? Choisissez deux villes ci-dessous et nous classerons chaque heure de la journée selon son confort pour les deux personnes, pas seulement si cela se chevauche techniquement.",
		faqHeading: 'Questions fréquentes',
		faqs: [
			{
				q: "Quel est le meilleur moment pour appeler quelqu'un dans un autre fuseau horaire ?",
				a: "Le meilleur moment est celui qui tombe dans les heures confortables des deux personnes — pas seulement « techniquement de jour » pour les deux. Réglez le mode de chaque personne sur Travail ou Personnel ci-dessus, et chaque heure candidate reçoit un Score de Confort (Excellent, Bon ou Mauvais) afin que vous voyiez d'un coup d'œil quelles heures sont réellement pratiques plutôt que simplement possibles.",
			},
			{
				q: "En quoi est-ce différent d'un simple convertisseur de fuseau horaire ?",
				a: "Un convertisseur vous montre simplement l'heure qu'il est ailleurs. Ce calculateur classe chaque heure de la journée pour les deux participants à la fois, en tenant compte des heures de travail ou de veille de chacun, des week-ends et de votre propre curseur d'heures acceptables — puis fait ressortir les heures qui valent réellement la peine d'être proposées.",
			},
			{
				q: "Puis-je partager le résultat avec l'autre personne ?",
				a: 'Oui — le bouton « Copier le lien à partager » encode vos deux villes, la date choisie et les paramètres directement dans l\'URL, si bien que la personne à qui vous l\'envoyez voit instantanément exactement le même calcul, sans inscription ni ressaisie manuelle.',
			},
		],
	},
	de: {
		title: 'Meetingplaner-Zeitzonenrechner — Beste Zeit, um Jemanden im Ausland Anzurufen',
		description:
			'Ein Termin- und Zeitplaner für zwei Städte — wähle beide aus und sieh sofort die beste Zeit zum Anrufen oder Treffen, bewertet nach Comfort Score, damit es für beide Seiten passt.',
		eyebrow: 'Zwei-Städte-Rechner',
		h1: 'Beste Anrufzeit, Meetingzeit-Rechner',
		intro:
			'Fragst du dich, wann die beste Zeit ist, um jemanden in einer anderen Stadt anzurufen — oder brauchst du einfach die Überschneidung zweier Arbeitstage? Wähle unten zwei Städte aus, und wir bewerten jede Stunde des Tages danach, wie angenehm sie für beide Personen ist — nicht nur, ob sie sich technisch überschneidet.',
		faqHeading: 'Häufig gestellte Fragen',
		faqs: [
			{
				q: 'Was ist die beste Zeit, um jemanden in einer anderen Zeitzone anzurufen?',
				a: 'Die beste Zeit ist eine, die in die angenehmen Stunden beider Personen fällt — nicht nur "technisch tagsüber" für beide. Stelle den Modus jeder Person oben auf Arbeit oder Privat, und jede mögliche Stunde erhält einen Comfort Score (Ausgezeichnet, Gut oder Schlecht), sodass du auf einen Blick siehst, welche Zeiten wirklich bequem sind und nicht nur möglich.',
			},
			{
				q: 'Wie unterscheidet sich das von einem einfachen Zeitzonen-Umrechner?',
				a: 'Ein Umrechner zeigt dir nur, wie spät es anderswo ist. Dieser Rechner bewertet jede Stunde des Tages für beide Teilnehmer gleichzeitig, unter Berücksichtigung der Arbeits- oder Wachzeiten jeder Person, der Wochenenden und deines eigenen Schiebereglers für akzeptable Stunden — und zeigt dann die Zeiten, die es wirklich wert sind, vorgeschlagen zu werden.',
			},
			{
				q: 'Kann ich das Ergebnis mit der anderen Person teilen?',
				a: 'Ja — die Schaltfläche "Teilbaren Link kopieren" kodiert deine beiden Städte, das gewählte Datum und die Einstellungen direkt in die URL, sodass die Person, an die du sie sendest, sofort genau dieselbe Berechnung sieht — ohne Anmeldung und ohne manuelles erneutes Eingeben.',
			},
		],
	},
	pt: {
		title: 'Calculadora de Fuso Horário para Reuniões — Melhor Horário para Ligar para Alguém no Exterior',
		description:
			'Um planejador de data e horário para duas cidades — escolha ambas e veja instantaneamente o melhor horário para ligar ou se reunir, classificado por Pontuação de Conforto para que seja conveniente para ambos os lados.',
		eyebrow: 'Calculadora de duas cidades',
		h1: 'Melhor horário para ligar, calculadora de horário de reunião',
		intro:
			'Está se perguntando qual é o melhor horário para ligar para alguém em outra cidade — ou apenas precisa da sobreposição entre dois dias de trabalho? Escolha duas cidades abaixo e classificaremos cada hora do dia por quão confortável ela é para ambas as pessoas, não apenas se tecnicamente se sobrepõe.',
		faqHeading: 'Perguntas frequentes',
		faqs: [
			{
				q: 'Qual é o melhor horário para ligar para alguém em um fuso horário diferente?',
				a: 'O melhor horário é aquele que cai dentro das horas confortáveis de ambas as pessoas — não apenas "tecnicamente de dia" para ambas. Defina o modo de cada pessoa como Trabalho ou Pessoal acima, e cada hora candidata recebe uma Pontuação de Conforto (Excelente, Boa ou Ruim) para que você veja rapidamente quais horários são genuinamente convenientes, e não apenas possíveis.',
			},
			{
				q: 'Qual a diferença entre isso e um simples conversor de fuso horário?',
				a: 'Um conversor apenas mostra que horas são em outro lugar. Esta calculadora classifica cada hora do dia para ambos os participantes ao mesmo tempo, considerando o horário de trabalho ou de vigília de cada pessoa, os fins de semana e o seu próprio controle deslizante de horas aceitáveis — e então destaca os horários que realmente vale a pena propor.',
			},
			{
				q: 'Posso compartilhar o resultado com a outra pessoa?',
				a: 'Sim — o botão "Copiar link para compartilhar" codifica suas duas cidades, a data escolhida e as configurações diretamente na URL, então quem você enviar verá exatamente o mesmo cálculo instantaneamente, sem cadastro e sem precisar reinserir nada manualmente.',
			},
		],
	},
	ko: {
		title: '미팅 플래너 시간대 계산기 — 해외에 있는 사람에게 전화하기 가장 좋은 시간',
		description:
			'두 도시를 위한 날짜 및 시간 미팅 플래너 — 두 도시를 선택하면 양쪽 모두에게 편리하도록 컴포트 스코어로 순위가 매겨진 최적의 통화 또는 회의 시간을 즉시 확인할 수 있습니다.',
		eyebrow: '두 도시 계산기',
		h1: '최적의 통화 시간, 미팅 시간 계산기',
		intro:
			'다른 도시에 있는 사람에게 전화하기 가장 좋은 시간이 궁금하신가요 — 아니면 단순히 두 근무일의 겹치는 시간이 필요하신가요? 아래에서 두 도시를 선택하면, 단순히 기술적으로 겹치는지가 아니라 양쪽 모두에게 얼마나 편한지에 따라 하루의 모든 시간을 순위별로 보여드립니다.',
		faqHeading: '자주 묻는 질문',
		faqs: [
			{
				q: '다른 시간대에 있는 사람에게 전화하기 가장 좋은 시간은 언제인가요?',
				a: '최적의 시간은 두 사람 모두의 편안한 시간대 안에 드는 시간입니다 — 단순히 양쪽 모두 "기술적으로 낮"인 시간이 아닙니다. 위에서 각 사람의 모드를 업무용 또는 개인용으로 설정하면, 후보 시간마다 컴포트 스코어(우수, 양호, 나쁨)가 매겨져 어떤 시간이 단순히 가능한 정도가 아니라 진짜로 편리한지 한눈에 알 수 있습니다.',
			},
			{
				q: '단순한 시간대 변환기와 무엇이 다른가요?',
				a: '변환기는 단지 다른 곳의 현재 시간을 보여줄 뿐입니다. 이 계산기는 각 사람의 근무 시간 또는 활동 시간, 주말, 그리고 사용자가 설정한 허용 시간 슬라이더를 고려하여 두 참가자 모두에게 하루의 모든 시간을 순위별로 매긴 다음, 실제로 제안할 가치가 있는 시간을 보여줍니다.',
			},
			{
				q: '결과를 상대방과 공유할 수 있나요?',
				a: '네 — "공유 가능한 링크 복사" 버튼은 두 도시, 선택한 날짜, 설정을 URL에 직접 인코딩하므로, 링크를 보낸 상대방은 가입이나 수동 재입력 없이 즉시 동일한 계산 결과를 볼 수 있습니다.',
			},
		],
	},
	it: {
		title: 'Calcolatore di Fuso Orario per Riunioni — Miglior Orario per Chiamare Qualcuno all\'Estero',
		description:
			'Un pianificatore di data e ora per due città — scegli entrambe e vedi immediatamente il momento migliore per chiamare o incontrarsi, classificato per Punteggio di Comfort in modo che sia conveniente per entrambe le parti.',
		eyebrow: 'Calcolatore a due città',
		h1: 'Miglior orario per chiamare, calcolatore orario riunioni',
		intro:
			"Ti chiedi quale sia il momento migliore per chiamare qualcuno in un'altra città — o hai semplicemente bisogno della sovrapposizione tra due giornate lavorative? Scegli due città qui sotto e classificheremo ogni ora del giorno in base a quanto sia comoda per entrambe le persone, non solo se tecnicamente si sovrappone.",
		faqHeading: 'Domande frequenti',
		faqs: [
			{
				q: "Qual è il momento migliore per chiamare qualcuno in un fuso orario diverso?",
				a: 'Il momento migliore è quello che rientra nelle ore comode per entrambe le persone — non solo "tecnicamente diurno" per entrambe. Imposta la modalità di ciascuna persona su Lavoro o Personale qui sopra, e ogni ora candidata riceve un Punteggio di Comfort (Eccellente, Buono o Scarso) così puoi vedere a colpo d\'occhio quali orari sono davvero convenienti, non solo possibili.',
			},
			{
				q: "In cosa differisce da un semplice convertitore di fuso orario?",
				a: "Un convertitore ti mostra solo che ora è altrove. Questo calcolatore classifica ogni ora del giorno per entrambi i partecipanti contemporaneamente, tenendo conto dell'orario di lavoro o di veglia di ciascuna persona, dei weekend e del tuo cursore delle ore accettabili — poi evidenzia gli orari che vale davvero la pena proporre.",
			},
			{
				q: "Posso condividere il risultato con l'altra persona?",
				a: 'Sì — il pulsante "Copia link condivisibile" codifica le tue due città, la data scelta e le impostazioni direttamente nell\'URL, così chiunque tu lo invii vedrà istantaneamente esattamente lo stesso calcolo, senza registrazione e senza dover reinserire nulla manualmente.',
			},
		],
	},
};
