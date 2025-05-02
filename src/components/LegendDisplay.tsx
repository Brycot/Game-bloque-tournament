import { Legend } from '../dto/leaderboard.dto';

interface LegendDisplayProps {
  legend: Legend;
}

const LegendDisplay = ({ legend }: LegendDisplayProps) => (
  <section className="mx-auto max-w-6xl">
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {legend.tiers.map((tier, i) => (
        <li
          key={i}
          className="
            group relative overflow-hidden rounded-2xl
            bg-gray-100 dark:bg-custom-medium-gray
            transition-transform duration-200 ease-out
            hover:scale-[1.02]
          "
        >

          <div className="flex flex-col gap-2 p-6">
            <h3 className="text-lg font-semibold tracking-wide text-custom-accent-blue">
              Range {tier.range}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {tier.representation}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Example:
            </p>

            <ul className="flex flex-row flex-wrap w-full gap-2">
              {tier.example
                .split(',')
                .map(t => t.trim())
                .filter(Boolean)
                .map((icon, idx) => (
                  <li
                    key={idx}
                    className="
                      flex items-center justify-center
                      rounded-full py-2 px-3 bg-white dark:bg-custom-dark-gray/20
                      ring-2 ring-custom-accent-blue/70
                      shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                      leading-none text-[26px] sm:text-2xl
                      transition-all duration-200 ease-out
                      group-hover:-translate-y-0.5 group-hover:scale-110
                    "
                  >
                    {icon}
                  </li>
                ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default LegendDisplay;
