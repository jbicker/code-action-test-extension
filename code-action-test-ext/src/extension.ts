import * as vscode from 'vscode';

class MardownCodeActionsProvider implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<(vscode.CodeAction | vscode.Command)[]> {
        return [
            {
                title: "TestAction1: " + context.triggerKind
            },
            {
                title: "TestAction2: " + context.triggerKind
            }
        ]
    }

}

export function activate(context: vscode.ExtensionContext) {
	
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(
        { language: 'markdown', pattern: '**​/README.md' }, 
        new MardownCodeActionsProvider()));

}
