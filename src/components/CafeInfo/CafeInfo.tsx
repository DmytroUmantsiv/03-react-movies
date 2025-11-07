
import css from './CafeInfo.module.css';

interface CafeInfoProps {
  title?: string;        
  description?: string;
}

const CafeInfo = ({
  title = 'Sip Happens Café',
  description = 'Please rate our service by selecting one of the options below.',
}: CafeInfoProps) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CafeInfo;