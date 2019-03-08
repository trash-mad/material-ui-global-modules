# Material Ui Global Modules

Форк оригинальной версии популярного набора React компонентов, реализующих элементы управления в стиле Google Material. Отличается тем, что поставляется в виде объекта, расширяющего глобальное пространство имен. Это удобно, так как можно сочетать со внутренними модулями TypeScript и на коленке прототипировать пользовательский интерфейс. На всякий случай, я сделал копию сайта с документацией и файлов типизации. Примечание: файлы типизации взяты с отдельного репозитория и могут полностью не покрыть все объекты JS библиотеки: правим ручками!

Будьте внимательны! Компоненты из этой версии библиотеки должны быть дочерними по отношению к <MaterialUi.MuiThemeProvider/>, чтобы получить контекст темы! Иначе жахнется с ошибкой...

```
namespace AutoLogicalAnalysis
{
    function AutoLogicalAnalysis(){
        return (
            <MaterialUi.MuiThemeProvider>
                <MaterialUi.FlatButton label="Save" />
            </MaterialUi.MuiThemeProvider>
        );
    }

    export function Main(){
        ReactDOM.render(<AutoLogicalAnalysis/>, document.getElementById('mount-point'));
    }
}
```

Оставлю ссылки для посещения(возможно, потребуется WebTimeMachine, скоро будут не актуальными)
  - [DefinitelyTyped MaterialUi v0.20.1](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/material-ui)
  - [Документация MaterialUi (v 0.*)](https://v0.material-ui.com/)
  - [Обсуждение на GitHub про фичу с контекстом темы](https://github.com/mui-org/material-ui/issues/686)
