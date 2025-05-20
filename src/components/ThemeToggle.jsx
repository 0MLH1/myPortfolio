
    import React from 'react';
    import { Moon, Sun } from 'lucide-react';
    import { useTheme } from '@/components/theme-provider';
    import { Button } from '@/components/ui/button';
    import { Switch } from '@/components/ui/switch';
    import { Label } from '@/components/ui/label';


    export function ThemeToggle() {
      const { theme, setTheme } = useTheme();

      return (
        <div className="flex items-center space-x-2">
          <Sun className={`h-5 w-5 transition-all ${theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground'}`} />
          <Switch
            id="theme-toggle"
            checked={theme === 'dark'}
            onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          />
          <Moon className={`h-5 w-5 transition-all ${theme === 'dark' ? 'text-blue-400' : 'text-muted-foreground'}`} />
        </div>
      );
    }
  