import Icon from '~/components/Icon/Icon';

interface StatusTrackerProps {
  heading: string;
  statuses: Status[];
}

export interface Status {
    label: string;
    status: 'success' | 'fail' | 'incomplete';
}

const statusToIcon = {
  success: {
    color: "var(--color-success)",
    icon: 'circle-check'
  },
  fail: {
    color: "var(--color-fail)",
    icon: 'circle-x'
  },
  incomplete: {
    color: "var(--color-text)",
    icon: 'circle'
  }
}

export const StatusTracker = ({ heading, statuses }: StatusTrackerProps) => (
  <section style={{
    display: "flex",
    flexDirection: "column", 
    gap: "var(--size-1)"
  }}>
    <h1
      style={{
        fontFamily: "var(--font-secondary)",
        fontSize: "var(--navigation-heading-font-size)",
        lineHeight: 1.5,
        margin: 0,
        fontWeight: "var(--font-weight-normal)"
      }}
    >
      {heading}
    </h1>
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--size-0-5)"
    }}>
      {statuses.map(({ label, status }) => (
        <div style={{ 
          ["--icon-color" as string]: statusToIcon[status].color,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ ["--icon-color" as string]: "var(--medium-text-font-size)" }}>{label}</div>
          <Icon 
            iconName={statusToIcon[status].icon} 
          />
      </div>
      ))}
    </div>
  </section>
)
