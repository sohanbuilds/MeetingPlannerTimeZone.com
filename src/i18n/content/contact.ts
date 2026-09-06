export interface ContactContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	emailTitle: string;
	emailBody: string;
	emailBodyAfterLink: string;
	bugTitle: string;
	bugBody: string;
	legalTitle: string;
	legalBodyBefore: string;
	legalPrivacyLink: string;
	legalBodyMiddle: string;
	legalTermsLink: string;
	legalBodyAfter: string;
}

export const contactContent: Record<string, ContactContent> = {
	es: {
		title: 'Contáctanos — MeetingPlannerTimeZone',
		description:
			'Ponte en contacto con el equipo de MeetingPlannerTimeZone — informa de un error, sugiere una función o haz una pregunta.',
		eyebrow: 'Contáctanos',
		h1: 'Ponte en contacto',
		intro: 'Preguntas, informes de errores y sugerencias de funciones son todos bienvenidos.',
		emailTitle: 'Correo electrónico',
		emailBody: 'La mejor forma de contactarnos es por correo electrónico a',
		emailBodyAfterLink: 'Leemos todos los mensajes e intentamos responder lo antes posible.',
		bugTitle: 'Informar de un error',
		bugBody:
			'Si algo se ve mal — una conversión, el desfase de una ciudad, o un fallo visual — cuéntanos qué ciudades y fechas estabas usando para que podamos reproducirlo rápidamente.',
		legalTitle: 'Privacidad y legal',
		legalBodyBefore: 'Para preguntas sobre cómo funciona el sitio, consulta nuestra',
		legalPrivacyLink: 'Política de Privacidad',
		legalBodyMiddle: 'y',
		legalTermsLink: 'Términos y Condiciones',
		legalBodyAfter: '.',
	},
	ja: {
		title: 'お問い合わせ — MeetingPlannerTimeZone',
		description: 'MeetingPlannerTimeZoneチームへのお問い合わせ — バグの報告、機能の提案、ご質問など。',
		eyebrow: 'お問い合わせ',
		h1: 'お問い合わせ',
		intro: 'ご質問、バグ報告、機能のご要望など、どうぞお気軽にご連絡ください。',
		emailTitle: 'メール',
		emailBody: '最も確実な連絡方法は、次のメールアドレス宛のメールです:',
		emailBodyAfterLink: 'すべてのメッセージに目を通し、できるだけ早くご返信するよう努めています。',
		bugTitle: 'バグの報告',
		bugBody:
			'変換結果、都市のオフセット、表示の不具合など、何かおかしいと感じた場合は、使用していた都市と日付をお知らせください。迅速に再現できます。',
		legalTitle: 'プライバシーと法的事項',
		legalBodyBefore: 'サイトの仕組みについてのご質問は、',
		legalPrivacyLink: 'プライバシーポリシー',
		legalBodyMiddle: 'および',
		legalTermsLink: '利用規約',
		legalBodyAfter: 'をご覧ください。',
	},
	fr: {
		title: 'Nous contacter — MeetingPlannerTimeZone',
		description:
			"Contactez l'équipe de MeetingPlannerTimeZone — signalez un bug, suggérez une fonctionnalité, ou posez une question.",
		eyebrow: 'Nous contacter',
		h1: 'Nous contacter',
		intro: 'Questions, signalements de bugs et suggestions de fonctionnalités sont tous les bienvenus.',
		emailTitle: 'E-mail',
		emailBody: 'Le meilleur moyen de nous joindre est par e-mail à',
		emailBodyAfterLink: 'Nous lisons chaque message et essayons de répondre dès que possible.',
		bugTitle: 'Signaler un bug',
		bugBody:
			"Si quelque chose semble incorrect — une conversion, le décalage d'une ville, ou un problème d'affichage — indiquez-nous quelles villes et dates vous utilisiez afin que nous puissions le reproduire rapidement.",
		legalTitle: 'Confidentialité et mentions légales',
		legalBodyBefore: 'Pour toute question sur le fonctionnement du site, consultez notre',
		legalPrivacyLink: 'Politique de confidentialité',
		legalBodyMiddle: 'et nos',
		legalTermsLink: 'Conditions générales',
		legalBodyAfter: '.',
	},
	de: {
		title: 'Kontakt — MeetingPlannerTimeZone',
		description:
			'Kontaktiere das MeetingPlannerTimeZone-Team — melde einen Fehler, schlage eine Funktion vor oder stelle eine Frage.',
		eyebrow: 'Kontakt',
		h1: 'Kontaktiere uns',
		intro: 'Fragen, Fehlerberichte und Funktionswünsche sind alle willkommen.',
		emailTitle: 'E-Mail',
		emailBody: 'Der beste Weg, uns zu erreichen, ist per E-Mail an',
		emailBodyAfterLink: 'Wir lesen jede Nachricht und versuchen, so schnell wie möglich zu antworten.',
		bugTitle: 'Einen Fehler melden',
		bugBody:
			'Wenn etwas falsch aussieht — eine Umrechnung, der Offset einer Stadt oder ein Anzeigefehler — teile uns mit, welche Städte und Daten du verwendet hast, damit wir es schnell nachvollziehen können.',
		legalTitle: 'Datenschutz und Rechtliches',
		legalBodyBefore: 'Fragen zur Funktionsweise der Seite beantwortet unsere',
		legalPrivacyLink: 'Datenschutzerklärung',
		legalBodyMiddle: 'und unsere',
		legalTermsLink: 'Allgemeinen Geschäftsbedingungen',
		legalBodyAfter: '.',
	},
	pt: {
		title: 'Fale conosco — MeetingPlannerTimeZone',
		description:
			'Entre em contato com a equipe do MeetingPlannerTimeZone — relate um bug, sugira um recurso ou faça uma pergunta.',
		eyebrow: 'Fale conosco',
		h1: 'Fale conosco',
		intro: 'Perguntas, relatos de bugs e sugestões de recursos são todos bem-vindos.',
		emailTitle: 'E-mail',
		emailBody: 'A melhor forma de nos contatar é por e-mail em',
		emailBodyAfterLink: 'Lemos todas as mensagens e tentamos responder o quanto antes.',
		bugTitle: 'Relatar um bug',
		bugBody:
			'Se algo parecer errado — uma conversão, o deslocamento de uma cidade, ou uma falha visual — conte quais cidades e datas você estava usando para que possamos reproduzir rapidamente.',
		legalTitle: 'Privacidade e questões legais',
		legalBodyBefore: 'Para perguntas sobre como o site funciona, veja nossa',
		legalPrivacyLink: 'Política de Privacidade',
		legalBodyMiddle: 'e nossos',
		legalTermsLink: 'Termos e Condições',
		legalBodyAfter: '.',
	},
	ko: {
		title: '문의하기 — MeetingPlannerTimeZone',
		description: 'MeetingPlannerTimeZone 팀에 문의하세요 — 버그 신고, 기능 제안, 질문 모두 환영합니다.',
		eyebrow: '문의하기',
		h1: '문의하기',
		intro: '질문, 버그 신고, 기능 제안 모두 환영합니다.',
		emailTitle: '이메일',
		emailBody: '가장 좋은 연락 방법은 이메일입니다:',
		emailBodyAfterLink: '모든 메시지를 확인하며 가능한 한 빨리 답변드리겠습니다.',
		bugTitle: '버그 신고',
		bugBody:
			'변환 결과, 도시의 오프셋, 또는 화면 표시 문제 등 이상한 점을 발견하셨다면, 사용 중이던 도시와 날짜를 알려주시면 빠르게 재현해 보겠습니다.',
		legalTitle: '개인정보 및 법적 사항',
		legalBodyBefore: '사이트 작동 방식에 대한 질문은',
		legalPrivacyLink: '개인정보 처리방침',
		legalBodyMiddle: '및',
		legalTermsLink: '이용약관',
		legalBodyAfter: '을 참고하세요.',
	},
	it: {
		title: 'Contattaci — MeetingPlannerTimeZone',
		description:
			'Contatta il team di MeetingPlannerTimeZone — segnala un bug, suggerisci una funzionalità o fai una domanda.',
		eyebrow: 'Contattaci',
		h1: 'Contattaci',
		intro: 'Domande, segnalazioni di bug e suggerimenti per nuove funzionalità sono tutti benvenuti.',
		emailTitle: 'Email',
		emailBody: 'Il modo migliore per contattarci è via email a',
		emailBodyAfterLink: 'Leggiamo ogni messaggio e cerchiamo di rispondere il prima possibile.',
		bugTitle: 'Segnalare un bug',
		bugBody:
			"Se qualcosa non torna — una conversione, l'offset di una città, o un problema di visualizzazione — facci sapere quali città e date stavi usando così possiamo riprodurlo rapidamente.",
		legalTitle: 'Privacy e informazioni legali',
		legalBodyBefore: 'Per domande su come funziona il sito, consulta la nostra',
		legalPrivacyLink: 'Informativa sulla Privacy',
		legalBodyMiddle: 'e i nostri',
		legalTermsLink: 'Termini e Condizioni',
		legalBodyAfter: '.',
	},
};
