import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Result {
  before: string;
  after: string;
  title: string;
  body: string;
  link?: { label: string; route: string };
}

interface Principle {
  title: string;
  body: string;
}

@Component({
  selector: 'app-agentic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agentic.component.html',
  styleUrls: ['./agentic.component.scss']
})
export class AgenticComponent {
  readonly results: Result[] = [
    {
      before: 'Months',
      after: '90 minutes',
      title: 'A defect the team had deferred for months',
      body:
        'A Java 8 to 21 upgrade introduced an abstract Spring Boot application-context failure that had broken the JBehave and Selenium suite. It had been repeatedly deferred — the evidence was spread across context initialisation, classpath scanning and test lifecycle, which is exactly the kind of problem that is hard to hold in one head. Working through it with GitLab Duo, it was isolated and resolved in about ninety minutes.',
      link: { label: 'Federal Reserve case study', route: '/work/federal-reserve' },
    },
    {
      before: 'Nine months',
      after: 'Three days',
      title: 'A rewrite of two production applications',
      body:
        'The Impact Library reader and the authoring application behind it were rebuilt agentically in roughly three days. The hand-built originals had taken nine months. Same domain, same requirements, same person deciding what correct looked like. That authoring app has since been merged into the operations console.',
      link: { label: 'Impact Library case study', route: '/work/impact-library' },
    },
    {
      before: 'Stalled',
      after: '40 minutes',
      title: 'Angular 16 to Angular 20, across a multi-application codebase',
      body:
        'Manual upgrade attempts had stalled. With Claude Code the migration took roughly forty minutes across the whole estate — every application sharing versioned libraries through git submodules.',
      link: { label: 'The Impact system', route: '/impact' },
    },
    {
      before: 'Deferred',
      after: 'Found and fixed',
      title: 'A security review that changed an architecture',
      body:
        'An AI-assisted review across the Impact estate surfaced clients writing financial and order data directly to Firestore. Security rules can govern who writes a document; they cannot validate what is written. Those paths moved behind Cloud Functions as a trusted boundary.',
      link: { label: 'Impact Platform case study', route: '/work/impact-platform' },
    },
  ];

  readonly principles: Principle[] = [
    {
      title: 'Spec first',
      body:
        'I write the specification before the agent writes anything. Most bad agent output traces back to an underspecified request, not to the model.',
    },
    {
      title: 'Human in the loop, every change',
      body:
        'I review everything an agent produces with an architect\'s eye. Acceleration is not delegation of judgment, and it is never delegation of accountability.',
    },
    {
      title: 'Guardrails before speed',
      body:
        'Review standards, quality gates and tests come first, because throughput without them just produces defects faster.',
    },
    {
      title: 'Bring the skeptics along',
      body:
        'I came to this hesitant, not resistant — twenty-eight years of instinct made me doubt a model could carry architectural weight. That is why I can coach experienced engineers through the same arc rather than talk past them.',
    },
  ];

  readonly tools = ['Claude Code — primary', 'GitHub Copilot', 'GitLab Duo', 'Grok'];
}
