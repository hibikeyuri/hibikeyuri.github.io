export function getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  
  /* get selected theme or return default theme */
  export function getStoredTheme(): 'light' | 'dark' | 'auto' {
    const theme = localStorage.getItem('theme')
    if (theme === 'light' || theme === 'dark' || theme === 'auto') return theme
    return 'dark'
  }
  
  /* final selected theme */
  export function resolveTheme(): 'light' | 'dark' {
    const saved = getStoredTheme()
    return saved === 'auto' ? getSystemTheme() : saved
  }