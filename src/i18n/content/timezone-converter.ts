export interface TimezoneConverterContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
}

export const timezoneConverterContent: Record<string, TimezoneConverterContent> = {
	es: {
		title: 'Conversor de Zona Horaria para Reuniones — Convierte una Hora a Cualquier Ciudad',
		description:
			'Una herramienta de conversión de zona horaria para reuniones: introduce una hora en una ciudad y ve al instante la hora correspondiente en otras — gestionando correctamente el cambio de día cuando la conversión cruza la medianoche.',
		eyebrow: 'Conversor de zona horaria',
		h1: 'Convierte una hora a cualquier ciudad',
		intro:
			'Introduce una fecha y hora en una ciudad y velas convertidas en todas las demás — incluido el cambio de día cuando una conversión cruza la medianoche, como las 10 PM del lunes en Nueva York que se convierten en las 7:30 AM del martes en India.',
	},
	ja: {
		title: 'タイムゾーン変換ミーティングプランナー — どの都市の時間にも変換',
		description:
			'ある都市の時間を入力すると、他の都市の対応する時間を即座に表示するタイムゾーン変換ツール。変換が深夜をまたぐ場合の日付変更も正しく処理します。',
		eyebrow: 'タイムゾーン変換',
		h1: 'どの都市の時間にも変換',
		intro:
			'ある都市の日付と時間を入力すると、他のすべての都市に変換された時間が表示されます。ニューヨークの月曜午後10時がインドの火曜午前7時30分になるような、日付をまたぐ変換も正しく処理します。',
	},
	fr: {
		title: 'Convertisseur de Fuseau Horaire pour Réunions — Convertissez une Heure Vers N\'importe Quelle Ville',
		description:
			"Un outil de conversion de fuseau horaire pour planifier des réunions : entrez une heure dans une ville et voyez instantanément l'heure correspondante ailleurs — en gérant correctement le changement de jour lorsque la conversion franchit minuit.",
		eyebrow: 'Convertisseur de fuseau horaire',
		h1: "Convertir une heure vers n'importe quelle ville",
		intro:
			"Entrez une date et une heure dans une ville et voyez-les converties partout ailleurs — y compris le changement de jour lorsque la conversion franchit minuit, comme 22h le lundi à New York qui devient 7h30 le mardi en Inde.",
	},
	de: {
		title: 'Zeitzonen-Umrechner für Meetings — Eine Uhrzeit in Jede Stadt Umrechnen',
		description:
			'Ein Zeitzonen-Umrechnungstool für die Meetingplanung: Gib eine Uhrzeit in einer Stadt ein und sieh sofort die entsprechende Uhrzeit in anderen Städten — mit korrekter Behandlung des Tageswechsels, wenn die Umrechnung Mitternacht überschreitet.',
		eyebrow: 'Zeitzonen-Umrechner',
		h1: 'Eine Uhrzeit in jede Stadt umrechnen',
		intro:
			'Gib ein Datum und eine Uhrzeit in einer Stadt ein und sieh, wie sie überall sonst umgerechnet werden — einschließlich des Tageswechsels, wenn eine Umrechnung Mitternacht überschreitet, etwa 22 Uhr Montag in New York, das zu 7:30 Uhr Dienstag in Indien wird.',
	},
	pt: {
		title: 'Conversor de Fuso Horário para Reuniões — Converta um Horário para Qualquer Cidade',
		description:
			'Uma ferramenta de conversão de fuso horário para planejamento de reuniões: insira um horário em uma cidade e veja instantaneamente o horário correspondente em outras — tratando corretamente a mudança de dia quando a conversão cruza a meia-noite.',
		eyebrow: 'Conversor de fuso horário',
		h1: 'Converta um horário para qualquer cidade',
		intro:
			'Insira uma data e horário em uma cidade e veja-os convertidos em todas as outras — incluindo a mudança de dia quando uma conversão cruza a meia-noite, como às 22h de segunda-feira em Nova York, que se torna 7h30 de terça-feira na Índia.',
	},
	ko: {
		title: '시간대 변환 미팅 플래너 — 어느 도시로든 시간 변환',
		description:
			'한 도시의 시간을 입력하면 다른 도시의 해당 시간을 즉시 보여주는 시간대 변환 도구 — 변환이 자정을 넘길 때 날짜 변경도 정확하게 처리합니다.',
		eyebrow: '시간대 변환',
		h1: '어느 도시로든 시간 변환하기',
		intro:
			'한 도시의 날짜와 시간을 입력하면 다른 모든 도시로 변환된 시간을 볼 수 있습니다. 뉴욕의 월요일 오후 10시가 인도의 화요일 오전 7시 30분이 되는 것처럼, 자정을 넘는 변환의 날짜 변경도 정확히 처리됩니다.',
	},
	it: {
		title: 'Convertitore di Fuso Orario per Riunioni — Converti un Orario in Qualsiasi Città',
		description:
			"Uno strumento di conversione del fuso orario per la pianificazione di riunioni: inserisci un orario in una città e vedi immediatamente l'orario corrispondente nelle altre — gestendo correttamente il cambio di giorno quando la conversione supera la mezzanotte.",
		eyebrow: 'Convertitore di fuso orario',
		h1: 'Converti un orario in qualsiasi città',
		intro:
			'Inserisci data e ora in una città e vedile convertite ovunque altrove — incluso il cambio di giorno quando una conversione supera la mezzanotte, come le 22:00 di lunedì a New York che diventano le 7:30 di martedì in India.',
	},
};
