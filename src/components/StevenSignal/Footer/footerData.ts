// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFooterItems = (t: (s: string) => void) => [
  {
    title: t('FOOTER_FIRST_ITEM_TITLE'),
    description: t('FOOTER_FIRST_ITEM_DESCRIPTION'),
    arrow: true,
  },
  {
    title: t('FOOTER_SECOND_ITEM_TITLE'),
    description: t('FOOTER_SECOND_ITEM_DESCRIPTION'),
    arrow: true,
  },
  {
    title: t('FOOTER_THIRD_ITEM_TITLE'),
    description: t('FOOTER_THIRD_ITEM_DESCRIPTION'),
    arrow: true,
  },
  {
    title: t('FOOTER_FOURTH_ITEM_TITLE'),
    description: t('FOOTER_FOURTH_ITEM_DESCRIPTION'),
    arrow: false,
  },
]
