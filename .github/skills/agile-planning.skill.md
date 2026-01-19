````markdown
# Agile Planning Skill

## Overview

This skill provides expertise in agile project management, epic coordination, and long-journey planning across multiple sprints and teams.

## Core Competencies

### Epic Management

- **Epic Breakdown**: Decomposing large initiatives into manageable stories
- **Dependency Mapping**: Identifying and tracking cross-team dependencies
- **Milestone Planning**: Setting and tracking key deliverables
- **Risk Assessment**: Identifying blockers and mitigation strategies

### Sprint Coordination

- **Sprint Planning**: Capacity-based story allocation
- **Velocity Tracking**: Measuring and forecasting team velocity
- **Backlog Grooming**: Prioritization and refinement
- **Stand-up Facilitation**: Daily sync patterns

### Cross-Team Alignment

- **Stakeholder Communication**: Progress reporting and expectation management
- **Resource Allocation**: Matching skills to tasks
- **Release Coordination**: Aligning multiple teams for releases

## Planning Formats

### Epic Charter Template

```markdown
# Epic: [Epic Name]

## Vision

What we're building and why.

## Success Metrics

- Metric 1: Target value
- Metric 2: Target value

## Scope

### In Scope

- Feature A
- Feature B

### Out of Scope

- Feature X (future phase)

## Dependencies

| Dependency | Owner        | Status         | ETA    |
| ---------- | ------------ | -------------- | ------ |
| API v2     | Backend Team | 🔄 In Progress | Week 3 |

## Milestones

1. [ ] MVP - Week 2
2. [ ] Beta - Week 4
3. [ ] GA - Week 6

## Risks

| Risk       | Impact | Likelihood | Mitigation                |
| ---------- | ------ | ---------- | ------------------------- |
| API delays | High   | Medium     | Parallel mock development |

## Team Assignment

| Role             | Agent        | Allocation |
| ---------------- | ------------ | ---------- |
| Lead Implementer | Di Scriptor  | 100%       |
| Type Safety      | Typescripter | 50%        |
```
````

### Sprint Planning Template

```markdown
# Sprint [N]: [Theme]

## Sprint Goals

1. Complete Feature X
2. Fix critical bugs Y, Z
3. Improve performance by 20%

## Capacity

- Total: 40 story points
- Available: 35 (accounting for meetings/overhead)

## Committed Stories

| Story               | Points | Owner        | Status   |
| ------------------- | ------ | ------------ | -------- |
| Implement auth flow | 8      | Di Scriptor  | 📋 To Do |
| Type definitions    | 3      | Typescripter | 📋 To Do |

## Risks & Dependencies

- Blocked: None
- At Risk: Auth flow (pending API)

## Carryover

- Stories from previous sprint
```

### Daily Stand-up Format

```markdown
## Stand-up [Date]

### Progress

- ✅ Completed: [Story/Task]
- 🔄 In Progress: [Story/Task]

### Blockers

- 🚧 [Blocker description] — Assigned to: [Agent]

### Today's Focus

- [Priority 1]
- [Priority 2]
```

## Velocity & Metrics

### Velocity Tracking

```markdown
## Velocity Chart

| Sprint | Committed | Completed | Velocity |
| ------ | --------- | --------- | -------- |
| S1     | 30        | 28        | 28       |
| S2     | 32        | 30        | 30       |
| S3     | 35        | 33        | 33       |

**Average Velocity**: 30.3 points/sprint
**Trend**: ↗️ Improving
```

### Burn-down Template

```markdown
## Epic Burn-down

Total Scope: 100 points
Completed: 45 points
Remaining: 55 points

Sprint Progress:
█████████░░░░░░░░░░░ 45%

ETA at current velocity: 2 sprints
```

## Dependency Management

### Dependency Matrix

```markdown
## Cross-Team Dependencies

| Feature   | Depends On | Blocking  | Status         |
| --------- | ---------- | --------- | -------------- |
| Auth UI   | Auth API   | -         | 🟡 Waiting     |
| Dashboard | Auth UI    | Analytics | 🔴 Blocked     |
| Analytics | Dashboard  | Reports   | ⚪ Not Started |
```

### Critical Path

```markdown
## Critical Path Analysis

1. Auth API (Week 1-2) ➡️
2. Auth UI (Week 2-3) ➡️
3. Dashboard (Week 3-4) ➡️
4. Analytics (Week 4-5) ➡️
5. Reports (Week 5-6)

**Critical Path Duration**: 6 weeks
**Buffer**: 1 week
```

## Communication Patterns

### Status Report Template

```markdown
# Weekly Status Report - Week [N]

## Summary

One-paragraph executive summary.

## Highlights

- ✅ Achievement 1
- ✅ Achievement 2

## Risks & Issues

| Item   | Impact | Status        | Action          |
| ------ | ------ | ------------- | --------------- |
| Risk 1 | High   | 🟡 Monitoring | Mitigation plan |

## Next Week

- Priority 1
- Priority 2

## Metrics

- Velocity: X points
- Bug count: Y
- Test coverage: Z%
```

### Stakeholder Update

```markdown
## [Epic Name] - Progress Update

**Status**: 🟢 On Track / 🟡 At Risk / 🔴 Delayed

**Progress**: 60% complete (Sprint 3 of 5)

**Key Achievements**:

- Milestone A delivered
- Milestone B 80% complete

**Upcoming**:

- Milestone C in 2 weeks

**Risks**:

- [Description] — Mitigation: [Plan]
```

## Tools Integration

### GitHub Projects

```yaml
# Project board columns
columns:
  - name: Backlog
    automation: none
  - name: Ready
    automation: auto-add-issues
  - name: In Progress
    automation: pull-request-opened
  - name: In Review
    automation: pull-request-review
  - name: Done
    automation: issue-closed
```

### Issue Labels

```yaml
labels:
  # Priority
  - name: priority/critical
    color: b60205
  - name: priority/high
    color: d93f0b
  - name: priority/medium
    color: fbca04
  - name: priority/low
    color: 0e8a16

  # Type
  - name: type/feature
    color: 1d76db
  - name: type/bug
    color: d73a4a
  - name: type/tech-debt
    color: 5319e7

  # Epic
  - name: epic/auth
    color: 006b75
  - name: epic/dashboard
    color: 006b75
```

## References

- [Agile Manifesto](https://agilemanifesto.org/)
- [Scrum Guide](https://scrumguides.org/)
- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

```

```
