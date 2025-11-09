import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const news = [
    {
      id: 1,
      title: 'Открытие нового офиса в Vinewood',
      date: '15 Октября 2024',
      preview: 'Kingsman Corporation расширяет своё присутствие в элитном районе Лос-Сантоса'
    },
    {
      id: 2,
      title: 'Годовой отчёт за 2024',
      date: '1 Октября 2024',
      preview: 'Рекордные показатели прибыли и расширение портфеля услуг'
    },
    {
      id: 3,
      title: 'Новая линейка премиум услуг',
      date: '20 Сентября 2024',
      preview: 'Представляем эксклюзивные решения для VIP-клиентов'
    }
  ];

  const management = [
    {
      name: 'Maksim Hartford',
      position: 'Генеральный директор',
      description: 'Основатель и CEO корпорации Kingsman. Визионер бизнеса, под руководством которого компания стала лидером рынка элитных услуг в Лос-Сантосе.'
    },
    {
      name: 'Alexie Morozov',
      position: 'Исполнительный директор',
      description: 'Со-основатель и COO корпорации Kingsman. Отвечает за операционное управление и стратегическое развитие компании.'
    },
    {
      name: 'Victoria Chen',
      position: 'Глава финансового отдела',
      description: 'CFO с 15-летним опытом в финансовом секторе. Управляет всеми финансовыми операциями корпорации.'
    },
    {
      name: 'Marcus Williams',
      position: 'Глава отдела безопасности',
      description: 'Бывший агент спецслужб. Обеспечивает безопасность клиентов и конфиденциальность операций.'
    },
    {
      name: 'Elena Rodriguez',
      position: 'Глава отдела VIP-клиентов',
      description: 'Специалист по работе с премиум-сегментом. Персональный подход к каждому клиенту.'
    },
    {
      name: 'James Anderson',
      position: 'Глава юридического отдела',
      description: 'Ведущий корпоративный юрист с безупречной репутацией в сфере бизнес-права.'
    }
  ];

  const renderHome = () => (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/c5a85fde-68d0-4d72-85a8-97d406f1d992/files/8d54f332-e671-440b-8a83-6454ba14cb13.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-white tracking-tight">
          KINGSMAN
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Элитная корпорация Лос-Сантоса
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            onClick={() => setActiveSection('about')}
            className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg"
          >
            О корпорации
          </Button>
          <Button 
            onClick={() => setActiveSection('news')}
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
          >
            Новости
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div 
      className="min-h-screen py-20 relative"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/c5a85fde-68d0-4d72-85a8-97d406f1d992/files/80a72385-5f8e-47a4-a507-2b3474812320.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
          О корпорации
        </h2>
        <Card className="bg-black/60 border-primary/30 p-8 md:p-12 backdrop-blur-sm">
          <div className="space-y-6 text-white">
            <p className="text-xl leading-relaxed">
              <span className="text-primary font-bold text-2xl">Kingsman Corporation</span> — ведущая элитная корпорация Лос-Сантоса, 
              специализирующаяся на предоставлении премиум-услуг высшего класса.
            </p>
            
            <h3 className="text-3xl font-bold text-primary mt-8 mb-4">Наша деятельность:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Icon name="Building2" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Элитная недвижимость</h4>
                  <p className="text-white/80">Эксклюзивные объекты в самых престижных районах города</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Briefcase" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Бизнес-консалтинг</h4>
                  <p className="text-white/80">Стратегическое развитие и управление компаниями</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Shield" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">VIP-безопасность</h4>
                  <p className="text-white/80">Комплексная защита клиентов и конфиденциальность</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="TrendingUp" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Инвестиции</h4>
                  <p className="text-white/80">Управление капиталом и инвестиционные решения</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Car" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Премиум-транспорт</h4>
                  <p className="text-white/80">Эксклюзивные автомобили и личные водители</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Users" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Event-менеджмент</h4>
                  <p className="text-white/80">Организация мероприятий высшего уровня</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/30">
              <p className="text-lg text-white/90">
                Мы работаем только с избранными клиентами, обеспечивая индивидуальный подход 
                и абсолютную конфиденциальность. Наша репутация — это гарантия качества и надёжности.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderNews = () => (
    <div 
      className="min-h-screen py-20 relative"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/c5a85fde-68d0-4d72-85a8-97d406f1d992/files/6a65f4db-b5b8-4f05-90a4-375cab81ac5f.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
          Новости
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {news.map((item) => (
            <Card 
              key={item.id}
              className="bg-black/60 border-primary/30 p-6 hover:bg-black/70 transition-all hover:scale-105 cursor-pointer backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Newspaper" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <p className="text-primary text-sm font-semibold">{item.date}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/80">{item.preview}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderManagement = () => (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black via-secondary to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
          Руководство
        </h2>
        <p className="text-center text-white/70 mb-12 text-lg">
          Команда профессионалов мирового уровня
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {management.slice(0, 2).map((person, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-black/80 to-secondary border-primary/50 p-8 hover:border-primary transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <Icon name="Crown" className="text-black" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{person.name}</h3>
                  <p className="text-primary font-semibold">{person.position}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{person.description}</p>
            </Card>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-white mb-8 text-center">Главы отделов</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {management.slice(2).map((person, index) => (
            <Card 
              key={index}
              className="bg-black/60 border-primary/30 p-6 hover:bg-black/70 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-3">
                  <Icon name="User" className="text-primary" size={28} />
                </div>
                <h4 className="text-lg font-bold text-white">{person.name}</h4>
                <p className="text-primary text-sm font-semibold mt-1">{person.position}</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{person.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              KINGSMAN
            </button>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('about')}
                className={`text-white hover:text-primary transition-colors font-medium ${
                  activeSection === 'about' ? 'text-primary' : ''
                }`}
              >
                О корпорации
              </button>
              <button
                onClick={() => setActiveSection('news')}
                className={`text-white hover:text-primary transition-colors font-medium ${
                  activeSection === 'news' ? 'text-primary' : ''
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => setActiveSection('management')}
                className={`text-white hover:text-primary transition-colors font-medium ${
                  activeSection === 'management' ? 'text-primary' : ''
                }`}
              >
                Руководство
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'news' && renderNews()}
        {activeSection === 'management' && renderManagement()}
      </div>
    </div>
  );
};

export default Index;
