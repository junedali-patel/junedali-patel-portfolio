'use client';

import { Button, Column, Flex, Heading, Text } from "@once-ui-system/core";
import { about } from "@/resources";
import { useState } from 'react';
import styles from './about.module.scss';

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Column fillWidth gap="m" marginBottom="40">
      <Heading as="h2" id={about.skills.title} variant="display-strong-s" marginBottom="m">
        {about.skills.title}
      </Heading>
      <Text variant="body-default-l" marginBottom="m">
        {about.skills.description}
      </Text>
      
      {/* Skill Categories */}
      <Flex wrap gap="8" marginBottom="m">
        {about.skills.groups.map((group, index) => (
          <Button
            key={`category-${index}`}
            variant={activeIndex === index ? "primary" : "secondary"}
            size="s"
            label={group.title}
            data-border="rounded"
            className={styles.skillCategory}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Flex>
      
      {/* Skill Cards */}
      <div className={styles.skillsContainer}>
        {about.skills.groups.map((group, index) => (
          <div 
            key={`skill-group-${index}`} 
            className={`${styles.skillGroup} ${activeIndex === index ? styles.active : ''}`}
          >
            <div className={styles.skillCard}>
              <div className={styles.skillCardContent}>
                <Text variant="heading-strong-s" marginBottom="m">{group.title}</Text>
                <Flex wrap gap="8">
                  {group.items.map((skill, skillIndex) => (
                    <Button
                      key={`${skill}-${skillIndex}`}
                      variant="secondary"
                      size="s"
                      label={skill}
                      data-border="rounded"
                      className={styles.skillButton}
                    />
                  ))}
                </Flex>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
}
