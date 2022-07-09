export function backgroundColor(theme, variant) {
    if (!variant) return theme.backgroundColors.primary;
    switch (variant) {
        case "quaternary": {
            return theme.backgroundColors.quaternary;
        }
        case "tertiary": {
            return theme.backgroundColors.tertiary;
        }
        case "secondary": {
            return theme.backgroundColors.secondary;
        }
        case "primary": {
            return theme.backgroundColors.primary;
        }
        default: {
            return theme.backgroundColors.quaternary;
        }
    }
}
