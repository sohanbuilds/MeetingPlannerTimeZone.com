export interface AboutContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	whyTitle: string;
	whyBody: string;
	howTitle: string;
	howBody: string;
	feedbackTitle: string;
	feedbackBody: string;
	feedbackCta: string;
}

export const aboutContent: Record<string, AboutContent> = {
	es: {
		title: 'Acerca de — MeetingPlannerTimeZone',
		description:
			'MeetingPlannerTimeZone es un conjunto gratuito de herramientas de zona horaria para encontrar la mejor hora para reunirse o llamar en todo el mundo — sin necesidad de registrarse.',
		eyebrow: 'Acerca de',
		h1: 'Matemáticas de zona horaria, sin el dolor de cabeza',
		intro:
			'MeetingPlannerTimeZone es una pequeña colección de herramientas gratuitas para averiguar cuándo reunirse o llamar a alguien en otra parte del mundo.',
		whyTitle: 'Por qué existe esto',
		whyBody:
			'Programar entre zonas horarias es un problema pequeño, pero molesto — hacer malabares con desfases UTC, cambios de horario de verano y "espera, ¿eso es AM o PM en su hora?" no debería tomar más tiempo que la propia reunión. Este sitio reúne en un solo lugar las herramientas que buscábamos: un planificador de reuniones multiciudad, una calculadora de dos ciudades, un conversor de zona horaria y un reloj mundial.',
		howTitle: 'Cómo funciona',
		howBody:
			'Cada cálculo se ejecuta directamente en tu navegador. No hay cuenta que crear ni servidor que procese tu horario — elige tus ciudades y la herramienta hace la conversión al instante. Cuando compartes un enlace, los detalles quedan codificados en la propia URL, así que la persona al otro lado ve el mismo resultado que tú.',
		feedbackTitle: 'Comentarios',
		feedbackBody: '¿Encontraste un error o tienes una idea para una herramienta que sería útil?',
		feedbackCta: 'Ponte en contacto',
	},
	ja: {
		title: '概要 — MeetingPlannerTimeZone',
		description:
			'MeetingPlannerTimeZoneは、世界中のどこかにいる相手と会議や通話をするのに最適な時間を見つけるための、無料のタイムゾーンツール集です。登録は不要です。',
		eyebrow: '概要',
		h1: '面倒なタイムゾーン計算から解放される',
		intro: 'MeetingPlannerTimeZoneは、世界の別の場所にいる誰かと会議や通話をするタイミングを見つけるための、無料ツールの小さなコレクションです。',
		whyTitle: 'このサイトを作った理由',
		whyBody:
			'タイムゾーンをまたいだスケジュール調整は、小さいけれど厄介な問題です。UTCオフセットのやりくり、サマータイムの切り替え、「あれ、それって向こうのAM?それともPM?」といった悩みに、会議そのものより時間をかけるべきではありません。このサイトは、私たちがいつも探していたツールを一箇所にまとめました。マルチシティ・ミーティングプランナー、2都市計算ツール、タイムゾーン変換、そして世界時計です。',
		howTitle: '仕組み',
		howBody:
			'すべての計算はブラウザ内で直接実行されます。アカウント作成は不要で、あなたのスケジュールを処理するサーバーもありません。都市を選ぶだけで、ツールが即座に変換を行います。リンクを共有すると、詳細がURL自体にエンコードされるため、相手も同じ結果を見ることができます。',
		feedbackTitle: 'フィードバック',
		feedbackBody: '不具合を見つけましたか?または役立ちそうなツールのアイデアがありますか?',
		feedbackCta: 'お問い合わせください',
	},
	fr: {
		title: 'À propos — MeetingPlannerTimeZone',
		description:
			"MeetingPlannerTimeZone est un ensemble gratuit d'outils de fuseau horaire pour trouver le meilleur moment pour se réunir ou s'appeler à travers le monde — sans inscription requise.",
		eyebrow: 'À propos',
		h1: 'Les calculs de fuseaux horaires, sans le casse-tête',
		intro:
			"MeetingPlannerTimeZone est une petite collection d'outils gratuits pour savoir quand se réunir ou appeler quelqu'un dans une autre partie du monde.",
		whyTitle: 'Pourquoi ce site existe',
		whyBody:
			"Planifier entre fuseaux horaires est un petit problème, mais agaçant — jongler avec les décalages UTC, les changements d'heure d'été, et se demander \"attends, c'est AM ou PM chez eux ?\" ne devrait pas prendre plus de temps que la réunion elle-même. Ce site rassemble en un seul endroit les outils que nous cherchions sans cesse : un planificateur de réunions multi-villes, un calculateur deux villes, un convertisseur de fuseau horaire et une horloge mondiale.",
		howTitle: 'Comment ça marche',
		howBody:
			"Chaque calcul s'exécute directement dans votre navigateur. Aucun compte à créer, aucun serveur ne traite votre emploi du temps — choisissez vos villes, et l'outil effectue la conversion instantanément. Lorsque vous partagez un lien, les détails sont encodés dans l'URL elle-même, si bien que la personne en face voit exactement le même résultat que vous.",
		feedbackTitle: 'Retours',
		feedbackBody: 'Vous avez trouvé un bug, ou une idée d\'outil qui pourrait aider ?',
		feedbackCta: 'Contactez-nous',
	},
	de: {
		title: 'Über uns — MeetingPlannerTimeZone',
		description:
			'MeetingPlannerTimeZone ist eine kostenlose Sammlung von Zeitzonen-Tools, um weltweit die beste Zeit für ein Meeting oder einen Anruf zu finden — ohne Anmeldung.',
		eyebrow: 'Über uns',
		h1: 'Zeitzonen-Mathematik, ohne Kopfschmerzen',
		intro:
			'MeetingPlannerTimeZone ist eine kleine Sammlung kostenloser Tools, um herauszufinden, wann man sich mit jemandem in einem anderen Teil der Welt treffen oder telefonieren sollte.',
		whyTitle: 'Warum es das gibt',
		whyBody:
			'Die Planung über Zeitzonen hinweg ist ein kleines, aber lästiges Problem — das Jonglieren mit UTC-Offsets, Sommerzeit-Umstellungen und der Frage "Moment, ist das bei denen vormittags oder nachmittags?" sollte nicht länger dauern als das Meeting selbst. Diese Seite bündelt an einem Ort die Tools, die wir immer wieder brauchten: einen Multi-Städte-Meetingplaner, einen Zwei-Städte-Rechner, einen Zeitzonen-Umrechner und eine Weltuhr.',
		howTitle: 'So funktioniert es',
		howBody:
			'Jede Berechnung läuft direkt in deinem Browser. Es gibt kein Konto zu erstellen und keinen Server, der deinen Zeitplan verarbeitet — wähle deine Städte, und das Tool führt die Umrechnung sofort durch. Wenn du einen Link teilst, sind die Details direkt in der URL kodiert, sodass die Person am anderen Ende genau dasselbe Ergebnis sieht wie du.',
		feedbackTitle: 'Feedback',
		feedbackBody: 'Einen Fehler gefunden oder eine Idee für ein hilfreiches Tool?',
		feedbackCta: 'Kontaktiere uns',
	},
	pt: {
		title: 'Sobre nós — MeetingPlannerTimeZone',
		description:
			'MeetingPlannerTimeZone é um conjunto gratuito de ferramentas de fuso horário para encontrar o melhor horário para reunir ou ligar em qualquer lugar do mundo — sem necessidade de cadastro.',
		eyebrow: 'Sobre nós',
		h1: 'Matemática de fuso horário, sem dor de cabeça',
		intro:
			'MeetingPlannerTimeZone é uma pequena coleção de ferramentas gratuitas para descobrir quando reunir ou ligar para alguém em outra parte do mundo.',
		whyTitle: 'Por que isso existe',
		whyBody:
			'Agendar entre fusos horários é um problema pequeno, mas irritante — lidar com deslocamentos UTC, mudanças de horário de verão e "espera, isso é de manhã ou à tarde no horário deles?" não deveria levar mais tempo do que a própria reunião. Este site reúne em um só lugar as ferramentas que sempre buscávamos: um planejador de reuniões multi-cidade, uma calculadora de duas cidades, um conversor de fuso horário e um relógio mundial.',
		howTitle: 'Como funciona',
		howBody:
			'Todo cálculo roda diretamente no seu navegador. Não há conta para criar nem servidor processando sua agenda — escolha suas cidades e a ferramenta faz a conversão instantaneamente. Ao compartilhar um link, os detalhes ficam codificados na própria URL, então a pessoa do outro lado vê exatamente o mesmo resultado que você.',
		feedbackTitle: 'Feedback',
		feedbackBody: 'Encontrou um bug ou tem uma ideia para uma ferramenta que ajudaria?',
		feedbackCta: 'Fale conosco',
	},
	ko: {
		title: '소개 — MeetingPlannerTimeZone',
		description:
			'MeetingPlannerTimeZone은 전 세계 어디에 있는 사람과도 회의나 통화를 하기에 가장 좋은 시간을 찾아주는 무료 시간대 도구 모음입니다 — 가입이 필요 없습니다.',
		eyebrow: '소개',
		h1: '골치 아픈 시간대 계산은 이제 그만',
		intro: 'MeetingPlannerTimeZone은 세계 다른 지역에 있는 누군가와 언제 만나거나 통화할지 알아내기 위한 작은 무료 도구 모음입니다.',
		whyTitle: '이 사이트를 만든 이유',
		whyBody:
			'시간대를 넘나드는 일정 조율은 사소하지만 성가신 문제입니다 — UTC 오프셋을 계산하고, 서머타임 변경을 신경 쓰고, "잠깐, 그쪽은 오전이야 오후야?"를 고민하는 데 회의 자체보다 더 많은 시간을 쓸 필요는 없습니다. 이 사이트는 우리가 계속 찾던 도구들을 한곳에 모았습니다: 다중 도시 회의 플래너, 두 도시 계산기, 시간대 변환기, 그리고 세계 시계입니다.',
		howTitle: '작동 방식',
		howBody:
			'모든 계산은 브라우저에서 직접 실행됩니다. 계정을 만들 필요도, 일정을 처리하는 서버도 없습니다 — 도시를 선택하면 도구가 즉시 변환을 수행합니다. 링크를 공유하면 세부 정보가 URL 자체에 인코딩되어, 상대방도 당신과 똑같은 결과를 보게 됩니다.',
		feedbackTitle: '피드백',
		feedbackBody: '버그를 발견했거나 도움이 될 만한 도구 아이디어가 있으신가요?',
		feedbackCta: '문의하기',
	},
	it: {
		title: 'Chi siamo — MeetingPlannerTimeZone',
		description:
			"MeetingPlannerTimeZone è una raccolta gratuita di strumenti per il fuso orario per trovare il momento migliore per incontrarsi o chiamare in tutto il mondo — senza bisogno di registrazione.",
		eyebrow: 'Chi siamo',
		h1: 'La matematica dei fusi orari, senza mal di testa',
		intro:
			"MeetingPlannerTimeZone è una piccola raccolta di strumenti gratuiti per capire quando incontrarsi o chiamare qualcuno in un'altra parte del mondo.",
		whyTitle: 'Perché esiste',
		whyBody:
			'Pianificare tra fusi orari diversi è un piccolo problema, ma fastidioso — destreggiarsi tra offset UTC, cambi dell\'ora legale e "aspetta, per loro è AM o PM?" non dovrebbe richiedere più tempo della riunione stessa. Questo sito riunisce in un unico posto gli strumenti che cercavamo sempre: un pianificatore di riunioni multi-città, un calcolatore a due città, un convertitore di fuso orario e un orologio mondiale.',
		howTitle: 'Come funziona',
		howBody:
			"Ogni calcolo viene eseguito direttamente nel tuo browser. Non c'è alcun account da creare né un server che elabora il tuo programma — scegli le tue città e lo strumento esegue subito la conversione. Quando condividi un link, i dettagli vengono codificati nell'URL stesso, così la persona dall'altra parte vede esattamente lo stesso risultato che vedi tu.",
		feedbackTitle: 'Feedback',
		feedbackBody: 'Hai trovato un bug o hai un\'idea per uno strumento che potrebbe aiutare?',
		feedbackCta: 'Contattaci',
	},
};
