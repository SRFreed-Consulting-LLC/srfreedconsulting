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

/** Work where the adoption problem was people and practice, not tooling. */
interface AdoptionItem {
  title: string;
  where: string;
  body: string;
}

/** Products with AI in them — a different claim from using AI to build. */
interface ShippedItem {
  title: string;
  body: string;
  link?: { label: string; route: string };
}

@Component({
  selector: 'app-agentic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agentic.component.html',
  styleUrls: ['./agentic.component.scss']
})
export class AgenticComponent {
  readonly adoption: AdoptionItem[] = [
    {
      title: 'Team-wide adoption, not a personal habit',
      where: 'Federal Reserve Bank of Cleveland',
      body:
        'I drove adoption of GitLab Duo across the Lincoln product team — not only for writing code, but for troubleshooting, sprint planning and code review. The interesting part was never the tool. It was getting experienced engineers, working on a platform that moves over $200 billion a year, to trust a new way of working without lowering the bar.',
    },
    {
      title: 'Standards before speed',
      where: 'How I run it',
      body:
        'Adoption fails when a team gets throughput before it gets guardrails. I establish the review standards, the definition of done for agent-generated code, and the quality gates first — so that when velocity arrives it lands on something that catches mistakes rather than multiplying them.',
    },
    {
      title: 'Meeting skeptics where they are',
      where: 'Because I was one',
      body:
        'Twenty-eight years of instinct made me doubt a model could carry architectural weight. I did not adopt this because it was fashionable; I adopted it because a specific problem got solved in front of me. So when a senior engineer pushes back, I am not arguing with them — I have already made their argument, and I can walk them through what changed my mind.',
    },
    {
      title: 'I did this before AI existed',
      where: 'Chick-fil-A · Northwestern Mutual',
      body:
        'Three years as a Development Mentor at Chick-fil-A, guiding a team through a serverless migration and setting the review standards that went with it. Before that, the Shift Left team at Northwestern Mutual — writing testing standards for other teams and running the training that taught them. Raising the practice of a team you do not manage is the same job whatever the technology is.',
    },
  ];

  readonly results: Result[] = [
    {
      before: 'Months',
      after: '90 minutes',
      title: 'A defect the team had deferred for months',
      body:
        'A Java 8 to 21 upgrade introduced an abstract Spring Boot application-context failure that had broken the JBehave and Selenium suite. It had been repeatedly deferred — the evidence was spread across context initialization, classpath scanning and test lifecycle, which is exactly the kind of problem that is hard to hold in one head. Working through it with GitLab Duo, it was isolated and resolved in about ninety minutes.',
      link: { label: 'Federal Reserve case study', route: '/work/federal-reserve' },
    },
    {
      before: 'Nine months',
      after: 'Three days',
      title: 'A rewrite of two production applications',
      body:
        'The Impact Library reader and the authoring application behind it were rebuilt agentically in roughly three days. The hand-built originals had taken nine months. Same domain, same requirements, same person deciding what correct looked like.',
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
  ];

  readonly shipped: ShippedItem[] = [
    {
      title: 'AI as a product feature, not a development aid',
      body:
        'Import Book takes a PDF of a curriculum and reads it with an AI pass that detects the structure — units, lessons, questions and images — then proposes the hierarchy staff would otherwise rebuild by hand. It is used by non-technical people who will never know or care which model is behind it. Nothing is persisted on the model’s say-so: the detected structure is reviewed and confirmed by a person first, which is the same boundary I hold for agent-generated code.',
      link: { label: 'Operations Platform case study', route: '/work/impact-admin' },
    },
    {
      title: 'AI pointed at review, not only authoring',
      body:
        'An AI-assisted security review across the Impact estate surfaced clients writing financial and order data straight to Firestore. Security rules can govern who writes a document; they cannot validate what is written. Those paths moved behind Cloud Functions as a trusted boundary. Using AI to find what you missed is a different discipline from using it to produce more, and it is the one teams skip.',
      link: { label: 'Platform case study', route: '/work/impact-platform' },
    },
    {
      title: 'A spec tool built on a Marine Corps operations order',
      body:
        'SMEAC Spec Builder turns the five-paragraph order — Situation, Mission, Execution, Admin & Logistics, Command & Signal — into a form that gets an agent-ready specification out of someone’s head in a few minutes, by voice or by keyboard. The order exists because a plan has to survive being handed to someone who cannot ask a follow-up question, which is exactly the position an agent is in. It is the first principle below, turned into a tool other people can use.',
      link: { label: 'SMEAC case study', route: '/work/smeac-spec-builder' },
    },
  ];

  readonly principles: Principle[] = [
    {
      title: 'Spec first',
      body:
        'I write the specification before the agent writes anything. Most bad agent output traces back to an underspecified request, not to the model. SMEAC Spec Builder is that habit turned into a tool.',
    },
    {
      title: 'Human in the loop, every change',
      body:
        'I review everything an agent produces with an architect’s eye. Acceleration is not delegation of judgment, and it is never delegation of accountability.',
    },
    {
      title: 'Guardrails before speed',
      body:
        'Review standards, quality gates and tests come first, because throughput without them just produces defects faster.',
    },
    {
      title: 'The team owns the practice',
      body:
        'A practice that depends on one enthusiast dies when that person leaves. The goal is a team with its own standards for this work that does not need me in the room.',
    },
  ];

  readonly tools = ['Claude Code — primary', 'GitHub Copilot', 'GitLab Duo', 'Grok'];
}
