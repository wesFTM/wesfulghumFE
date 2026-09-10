import Tag from '@/components/ui/Tag';
import { stackChips } from '@/data/site';

export default function StackChips() {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Primary stack">
      {stackChips.map((chip) => (
        <Tag key={chip} as="li">
          {chip}
        </Tag>
      ))}
    </ul>
  );
}
