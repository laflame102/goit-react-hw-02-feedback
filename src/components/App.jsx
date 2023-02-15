import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  setNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  setBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback(...numbers) {
    return numbers.reduce((acc, number) => (acc += number), 0);
  }

  countPositiveFeedbackPercentage(good, neutral, bad) {
    const total = good + neutral + bad;
    const positivePercentage = (good / (total - neutral)) * 100;
    return positivePercentage.toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={this.setGood}
          neutral={this.setNeutral}
          bad={this.setBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}
