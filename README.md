#Data from Parent → Child is passed using the @Input() decorator.

Data from Child → Parent is passed using the @Output() decorator and EventEmitter.

Lazy loading is achieved by separating the ParentModule and loading it on-demand in app-routing.module.ts.

Cross-cutting concerns (like shared UI modules) are handled using a centralized PrimeNgModule.

PrimeNG components like pButton and pInputText are used to enrich the UI.
