import { Card } from '@/components/ui/card';
import type { WorkExperience } from '@/types/work-experience';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  workExperience: WorkExperience;
};

const WorkExperienceItem = (props: Props) => {
  const { workExperience } = props;
  const { title, description, start, end, company, location, companyLogo } =
    workExperience;
  const period = `${dayjs(start).format('YYYY-MM')} - ${
    end ? dayjs(end).format('YYYY-MM') : 'Present'
  }`;
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="bg-black border-zinc-800 p-8">
        <div className="flex gap-8 items-center">
          <div className="flex-shrink-0 h-full">
            <img src={companyLogo.src} className="w-56" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-blue-400 mb-2">
              {company} | {period}
            </p>
            <p className="text-zinc-400">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default WorkExperienceItem;
